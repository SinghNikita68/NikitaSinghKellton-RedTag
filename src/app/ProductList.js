import React, { useState, useEffect, useCallback, useContext } from "react";
import { View, FlatList, ActivityIndicator, I18nManager } from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProductsData } from "../utils/webServiceHandler/WebServiceHandler";
import styles from "../constants/Styles";
import colors from "../constants/Colors";
import ProductCard from "../components/ProductCard";
import LanguageSwitch from "../components/LanguageSwitch";
import ProductHeader from "../components/ProductHeader";
import AppConstants from "../constants/AppConstants";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductList = () => {
  const { t } = useTranslation("LocaleStrings");
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [languageButtonTitle, setLanguageButtonTitle] = useState();
  const [loading, setLoading] = useState(true);
  const [numDisplayed, setNumDisplayed] = useState(8);
  const { savedProducts } = useContext(ProductsContext);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getCurrentLanguage();
      await fetchProductsData();
    };
    fetchData();
  }, []);

  // Fetch current language & set it in AsyncStorage
  const getCurrentLanguage = async () => {
    const { asyncStorage, languages } = AppConstants;
    try {
      const current = await AsyncStorage.getItem(asyncStorage.selectedLanguage);
      if (current) {
        setLanguageButtonTitle(
          current === languages.ar ? languages.en : languages.ar
        );
      } else {
        await AsyncStorage.setItem(asyncStorage.selectedLanguage, languages.en);
        setLanguageButtonTitle(languages.ar);
      }
    } catch (error) {
      console.error("Failed to get language from storage", error);
    }
  };

  // Fetch Products data from API
  const fetchProductsData = useCallback(async () => {
    try {
      const result = await getProductsData();
      const products = result?.data?.products || [];
      setProducts(products);
      setProductsToDisplay(products.slice(0, 8)); // Display first 8 products
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  }, []);

  // Load more products when user scrolls to the end of the list
  const loadMoreProducts = useCallback(() => {
    setTimeout(() => {
      const newNumDisplayed = numDisplayed + 4;
      if (newNumDisplayed <= products?.length) {
        setProductsToDisplay(products?.slice(0, newNumDisplayed));
        setNumDisplayed(newNumDisplayed);
      }
    }, 1000);
  }, [numDisplayed, products]);

  // Render Header for the screen
  const renderHeader = useCallback(() => {
    return (
      <ProductHeader
        title={t("headerTitle")}
        cartValue={savedProducts?.length}
      />
    );
  }, [savedProducts]);

  // Render Language Switch Button
  const renderLanguageSwitchButton = useCallback(() => {
    return <LanguageSwitch buttonTitle={languageButtonTitle} />;
  }, [languageButtonTitle]);

  // Show loader at the end of the list to indicate more products are loading
  const renderFooter = () => {
    if (numDisplayed < products?.length) {
      return (
        <View style={styles.listFooter}>
          <ActivityIndicator size="medium" color={colors.loaderGray} />
        </View>
      );
    } else {
      return null;
    }
  };

  // Show loader for the screen when data is being fetched
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.loaderGray} />
      </View>
    );
  }

  return (
    <>
      {renderHeader()}
      {renderLanguageSwitchButton()}
      <FlatList
        data={productsToDisplay}
        extraData={productsToDisplay}
        numColumns={2}
        contentContainerStyle={styles.productListStyle}
        keyExtractor={(item) => item?.title}
        renderItem={({ item }) => <ProductCard item={item} />}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </>
  );
};

export default ProductList;
