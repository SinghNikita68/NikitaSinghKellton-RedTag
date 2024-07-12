import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppConstants from "../constants/AppConstants";

// Creating a context to manage the products added to the cart
export const ProductsContext = createContext();

// Creating a provider to manage the products added to the cart
export const ProductsProvider = ({ children }) => {
  const [savedProducts, setSavedProducts] = useState([]);

  // Load cart products from AsyncStorage when the component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem(
          AppConstants.asyncStorage.addedProducts
        );
        if (storedProducts) {
          setSavedProducts(JSON.parse(storedProducts));
        }
      } catch (error) {
        console.error("Failed to load products from Local storage", error);
      }
    };
    loadProducts();
  }, []);

  // Save cart products to AsyncStorage when the state changes
  useEffect(() => {
    const saveProducts = async () => {
      try {
        await AsyncStorage.setItem(
          AppConstants.asyncStorage.addedProducts,
          JSON.stringify(savedProducts)
        );
      } catch (error) {
        console.error("Failed to save products to Local storage", error);
      }
    };

    saveProducts();
  }, [savedProducts]);

  // Add products to the cart
  const addProducts = (products) => {
    setSavedProducts((prevProducts) => [...prevProducts, ...products]);
  };

  return (
    <ProductsContext.Provider value={{ savedProducts, addProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
