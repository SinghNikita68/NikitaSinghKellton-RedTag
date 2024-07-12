import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../constants/Styles";
import imagePaths from "../constants/AppImages";
import CartHeader from "./CartHeader";

const ProductHeader = ({ title, onBackPress, cartValue }) => {
  return (
    <View style={styles.productHeaderContainer}>
      {onBackPress && (
        <View style={styles.backButtonContainer}>
          <Pressable onPress={onBackPress}>
            <Image source={imagePaths.back} style={styles.backButton} />
          </Pressable>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      <CartHeader cartValue={cartValue} />
    </View>
  );
};

export default ProductHeader;
