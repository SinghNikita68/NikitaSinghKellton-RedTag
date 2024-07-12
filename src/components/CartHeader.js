import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import imagePaths from "../constants/AppImages";
import styles from "../constants/Styles";

const CartHeader = ({ cartValue }) => {
  return (
    <View style={styles.cartHeaderContainer}>
      <Image
        style={styles.cartImage}
        source={imagePaths.cart}
        contentFit="contain"
        transition={1000}
      />
      <View style={styles.cartItemView}>
        <Text style={styles.cartItemText}>{cartValue || 0}</Text>
      </View>
    </View>
  );
};

export default CartHeader;
