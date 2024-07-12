import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import styles from "../constants/Styles";
import AppConstants from "../constants/AppConstants";
import imagePaths from "../constants/AppImages";
import CartModal from "./CartModal";

const ProductCard = ({ item }) => {
  const { t } = useTranslation("LocaleStrings");

  const [itemWishListed, setItemWishListed] = useState(false);
  const [cartModalVisible, setCartModalVisible] = useState(false);

  // Calculating discounted value
  const discountValue = Math.round(
    ((item?.compare_at_price_min - item?.price_min) * 100) /
      item?.compare_at_price_min
  );

  // Render Image of the Product
  const renderProductImage = () => {
    return (
      <View style={styles.productImageContainer}>
        <View style={styles.productImageView}>
          <Image
            style={styles.productImage}
            source={item.images[1]}
            placeholder={{
              blurhash: AppConstants.blurHash,
            }}
            contentFit="cover"
            transition={1000}
          />
        </View>
      </View>
    );
  };

  // Render Similar Icon
  const renderShowSimilarIcon = () => {
    return (
      <View style={styles.showSimilarIconContainer}>
        <View style={styles.showSimilarIcon}>
          <Image
            style={styles.similarViewImage}
            source={imagePaths.showSimilar}
            placeholder={{
              blurhash: AppConstants.blurHash,
            }}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <Text style={styles.similarViewText}>{t("viewSimilar")}</Text>
      </View>
    );
  };

  // Render Wishlist Icon & Handle its activity
  const renderWishlistIcon = () => {
    return (
      <Pressable
        style={styles.wishlistContainer}
        onPress={() => {
          setItemWishListed(!itemWishListed);
        }}
      >
        <Image
          style={styles.wishlistIcon}
          source={
            itemWishListed ? imagePaths.wishlistFilled : imagePaths.wishlist
          }
        />
      </Pressable>
    );
  };

  // Render Price view
  renderPrice = () => {
    return (
      <View style={styles.priceDiscountContainer}>
        {/* Price Container */}
        <View style={styles.priceContainer}>
          <View style={styles.priceInnerContainer}>
            <Text style={styles.currency}>{`${item?.currency}`}</Text>
            <Text style={styles.priceText}>
              {` ${
                item?.price_min > 0 &&
                item?.price_min !== item?.compare_at_price_min
                  ? item?.price_min
                  : item?.compare_at_price_min
              }`}
            </Text>
          </View>
          <Text style={styles.originalPrice}>
            {item?.price_min > 0 &&
            item?.price_min !== item?.compare_at_price_min
              ? `${item?.compare_at_price_min}`
              : null}
          </Text>
        </View>
        {/* Discount container */}
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>{`${discountValue}% `}</Text>
          <Text style={styles.discount}>{`${t("off")}`}</Text>
        </View>
      </View>
    );
  };

  // Render offer view
  const renderOffer = () => {
    return (
      <View style={styles.offerInfoContainer}>
        <View style={styles.offerView}>
          <Image source={imagePaths.discountOffer} style={styles.offerImage} />
          <Text style={styles.offerText}>{item["offer-message"]}</Text>
        </View>
      </View>
    );
  };

  // Render Add to Cart Button
  const renderAddToCartButton = () => {
    return (
      <Pressable
        onPress={() => {
          setCartModalVisible(true);
        }}
        style={styles.addToCartView}
      >
        <Image
          style={styles.addToCartImage}
          source={imagePaths.addToCart}
          placeholder={{
            blurhash: AppConstants.blurHash,
          }}
          contentFit="cover"
          transition={1000}
        />
      </Pressable>
    );
  };

  // Render product details
  const renderProductDetails = () => {
    return (
      <View style={styles.productInfoContainer}>
        <Text style={styles.productNameText}>{item?.title}</Text>
        {renderPrice()}
        {renderOffer()}
        {renderAddToCartButton()}
      </View>
    );
  };

  return (
    <>
      <View style={styles.productContainer}>
        {renderProductImage()}
        {renderShowSimilarIcon()}
        {renderWishlistIcon()}
        {renderProductDetails()}
      </View>
      <CartModal
        modalVisible={cartModalVisible}
        setCartModalVisibleOff={() => setCartModalVisible(false)}
        product={item}
      />
    </>
  );
};

export default ProductCard;
