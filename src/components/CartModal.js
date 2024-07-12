import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { useTranslation } from "react-i18next";
import Carousel from "react-native-reanimated-carousel";
import { ProductsContext } from "../contexts/ProductsContext";
import AppConstants from "../constants/AppConstants";
import styles from "../constants/Styles";
import imagePaths from "../constants/AppImages";
import CartHeader from "./CartHeader";
import colors from "../constants/Colors";

const width = Dimensions.get("screen").width;

function CartModal({ modalVisible, setCartModalVisibleOff, product }) {
  const { t } = useTranslation("LocaleStrings");

  const { savedProducts, addProducts } = useContext(ProductsContext);
  const [productAdded, setProductAdded] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const images = Object.values(product?.images);

  // Calculating discounted value
  const discountedValue = Math.round(
    ((product?.compare_at_price_min - product?.price_min) * 100) /
      product?.compare_at_price_min
  );

  // Function to increase the count if the count is less than 5, keeping 5 as max limit
  const increaseCount = () => {
    if (itemQuantity < 5) {
      setItemQuantity(itemQuantity + 1);
    }
  };

  // Function to decrease the count if the count is greater than 1
  const decreaseCount = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  // Set the products array with the product & quantity added to the cart
  useEffect(() => {
    setProductAdded(Array(itemQuantity).fill(product));
  }, [itemQuantity]);

  // Add to Bag handler
  const addToBagHandler = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setCartModalVisibleOff();
      addProducts(productAdded);
      setItemQuantity(1);
    }, 1000);
  };

  // Render carousel images
  const renderImage = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={{ uri: item }}
          placeholder={{
            blurhash: AppConstants.blurHash,
          }}
          transition={1000}
        />
      </View>
    );
  };

  // Render details of the product
  const renderProductDetailSection = () => {
    return (
      <View style={styles.priceInfoContainer}>
        {/* Price Section */}
        <View style={styles.priceView}>
          <View style={styles.salePriceView}>
            <Text style={styles.salePriceCurrencyText}>
              {`${product?.currency}`}
            </Text>
            <Text style={styles.salePriceText}>
              {` ${
                product?.price_min > 0 &&
                product?.price_min !== product?.compare_at_price_min
                  ? product?.price_min
                  : product?.compare_at_price_min
              }`}
            </Text>
          </View>
          <View style={styles.salePriceView}>
            <Text
              style={[
                styles.comparePriceText,
                { marginHorizontal: 0, paddingLeft: 5 },
              ]}
            >
              {`${product?.currency}`}
            </Text>
            <Text style={styles.comparePriceText}>
              {product?.price_min > 0 &&
              product?.price_min !== product?.compare_at_price_min
                ? `${product?.compare_at_price_min} `
                : null}
            </Text>
          </View>
        </View>

        {/* Discount Section */}
        <View style={styles.discountViewContainer}>
          <Text style={styles.discountValueText}>{`${discountedValue}% `}</Text>
          <Text style={styles.discountValueText}>{`${t("off")}`}</Text>
        </View>
      </View>
    );
  };

  // Render add to Bag section
  const renderAddToBagSection = () => {
    return (
      <View style={styles.addToBagBottomContainer}>
        <View style={styles.itemMainContainer}>
          <Pressable onPress={decreaseCount} style={styles.plusMinusBtn}>
            <Image source={imagePaths.minus} style={styles.plusMinusBtn} />
          </Pressable>

          <View style={styles.itemQuantityView}>
            <Text style={styles.itemQuantityText}>{itemQuantity}</Text>
          </View>

          <Pressable onPress={increaseCount} style={styles.plusMinusBtn}>
            <Image source={imagePaths.plus} style={styles.plusMinusBtn} />
          </Pressable>
        </View>
        <Pressable style={styles.addToBagBtn} onPress={addToBagHandler}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.addToBagText}>{t("addToBag")}</Text>
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <Modal
        hasBackdrop
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={modalVisible}
        style={styles.modalContainer}
        hideModalContentWhileAnimating
        useNativeDriver
        onBackdropPress={setCartModalVisibleOff}
        onBackButtonPress={setCartModalVisibleOff}
      >
        <View style={styles.mainContainerContent}>
          <View style={styles.headerContainer}>
            <Pressable
              onPress={setCartModalVisibleOff}
              style={styles.closeModal}
            >
              <Image source={imagePaths.close} style={styles.closeModal} />
            </Pressable>
            <View style={styles.headerTitleView}>
              <Text style={styles.headerTitleText}>{product?.title}</Text>
            </View>
            <CartHeader cartValue={savedProducts?.length} />
          </View>

          <View style={styles.imageCarouselView}>
            <Carousel
              loop
              vertical={false}
              width={width * 0.65}
              height={width * 0.6}
              style={{ width: "100%", height: "100%" }}
              pagingEnabled={true}
              autoPlay={true}
              data={images}
              scrollAnimationDuration={1000}
              renderItem={({ item }) => renderImage({ item })}
            />
          </View>

          {renderProductDetailSection()}
          <View style={styles.bottomSeparator}></View>
          {renderAddToBagSection()}
        </View>
      </Modal>
    </View>
  );
}

export default CartModal;
