/* 
 Global Styles for the application
*/
import { StyleSheet, I18nManager, Dimensions } from "react-native";
import colors from "./Colors";
import AppFonts from "./AppFonts";

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  // Product List Styles
  productListStyle: {
    justifyContent: "space-between",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listFooter: {
    flex: 1,
    marginVertical: 20,
  },
  productContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: colors.white,
    paddingBottom: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 10,
  },

  // Product Card Styles
  productImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
  },
  productImageView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  productImage: {
    flex: 1,
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 10,
  },
  showSimilarIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 38,
    position: "absolute",
    top: 3,
    left: 0,
  },
  showSimilarIcon: {
    height: 22,
    width: 22,
  },
  similarViewImage: {
    height: 15,
    width: 22,
  },
  similarViewText: {
    fontFamily: AppFonts.TB,
    fontSize: 10,
    lineHeight: 10,
    textAlign: "center",
  },
  wishlistContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 6,
    right: 6,
  },
  wishlistIcon: {
    height: 20,
    width: 20,
  },
  productInfoContainer: {
    flexGrow: 1,
    marginHorizontal: 10,
  },
  productNameText: {
    flexGrow: 1,
    flexWrap: "wrap",
    color: colors.black,
    fontSize: 14,
    lineHeight: 17,
    marginTop: 12,
    marginBottom: 8,
    fontFamily: AppFonts.TM,
  },
  priceDiscountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceInnerContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "baseline",
  },
  currency: {
    fontSize: 10,
    color: colors.red,
    fontFamily: AppFonts.TB,
  },
  priceText: {
    color: colors.red,
    fontSize: 16,
    fontFamily: AppFonts.TB,
  },
  originalPrice: {
    color: colors.black,
    fontSize: 12,
    textDecorationLine: "line-through",
    marginHorizontal: 5,
    fontFamily: AppFonts.TM,
  },
  discountContainer: {
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    borderColor: colors.lightRed,
    backgroundColor: colors.pink,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 1,
  },
  discount: {
    fontFamily: AppFonts.TB,
    color: colors.red,
    fontSize: 12,
    lineHeight: 20,
  },
  offerInfoContainer: {
    alignItems: "flex-start",
    marginTop: 5,
  },
  offerView: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: colors.pink,
    padding: 2,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: "dashed",
    borderColor: colors.red,
  },
  offerImage: {
    height: 12,
    width: 12,
  },
  offerText: {
    fontFamily: AppFonts.TB,
    marginLeft: 2,
    fontSize: 8,
    lineHeight: 17,
    letterSpacing: 0,
    fontWeight: "bold",
  },
  addToCartView: {
    flex: 1,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: colors.whiteThree,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    position: "absolute",
    right: -5,
    top: -25,
    backgroundColor: colors.white,
    padding: 6,
  },
  addToCartImage: {
    flex: 1,
    height: 18,
    width: 18,
    borderRadius: 10,
  },

  // Product Header Styles
  productHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  backButton: {
    height: 30,
    width: 30,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: AppFonts.TB,
    color: colors.black,
    textAlign: "center",
  },

  // Language Switch Styles
  languageButtonContainer: {
    backgroundColor: colors.black,
    marginVertical: 5,
  },
  languageButton: {
    fontSize: 17,
    color: colors.white,
    textAlign: "right",
    marginRight: 10,
    fontWeight: "bold",
  },

  // Cart Modal Styles
  modalContainer: {
    margin: 0,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  mainContainerContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 0,
  },
  closeModal: {
    height: 20,
    width: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerTitleView: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  headerTitleText: {
    fontFamily: AppFonts.TB,
    fontSize: 14,
  },
  imageCarouselView: {
    width: width,
    height: (width * 0.6 * 3) / 2,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: colors.grey,
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    width: width * 0.6,
    aspectRatio: 2 / 3,
    resizeMode: "cover",
  },
  priceInfoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 23,
    paddingBottom: 23,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
  },
  salePriceView: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "baseline",
  },
  salePriceCurrencyText: {
    color: colors.red,
    fontFamily: AppFonts.TB,
    fontSize: 16,
    fontWeight: "bold",
  },
  salePriceText: {
    color: colors.red,
    fontWeight: "bold",
    fontFamily: AppFonts.TB,
    fontSize: 16,
  },
  comparePriceText: {
    color: colors.black,
    textDecorationLine: "line-through",
    fontFamily: AppFonts.TM,
    fontSize: 10,
    fontSize: 16,
  },
  discountViewContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.pink,
    backgroundColor: colors.pink,
    alignItems: "center",
    marginHorizontal: 12,
    paddingHorizontal: 3,
    paddingVertical: 1,
  },
  discountValueText: {
    fontFamily: AppFonts.TB,
    fontSize: 10,
    lineHeight: 20,
    color: colors.red,
  },
  bottomSeparator: {
    borderTopWidth: 4,
    borderTopColor: colors.whiteSmoke,
  },
  addToBagBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15,
    paddingHorizontal: 25,
  },
  itemMainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusMinusBtn: {
    width: 30,
    height: 30,
  },
  itemQuantityView: {
    width: 44,
    height: 42,
    padding: 8,
    justifyContent: "center",
  },
  itemQuantityText: {
    textAlign: "center",
    fontFamily: AppFonts.TB,
    fontSize: 18,
    opacity: 0.85,
  },
  addToBagBtn: {
    backgroundColor: colors.black,
    borderRadius: 96,
    paddingVertical: 16,
    paddingHorizontal: 10,
    flex: 0.7,
  },
  addToBagText: {
    color: colors.white,
    fontFamily: AppFonts.TB,
    alignSelf: "center",
    fontSize: 16,
  },

  // Cart Header Styles
  cartHeaderContainer: {
    width: 38,
    height: 38,
  },
  cartImage: {
    width: 38,
    height: 34,
  },
  cartItemView: {
    flex: 1,
    width: 16,
    height: 16,
    backgroundColor: colors.red,
    borderRadius: 8,
    position: "absolute",
    left: I18nManager.isRTL ? 0 : 18,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemText: {
    color: colors.white,
    fontFamily: AppFonts.TR,
    fontSize: 11,
  },
});

export default styles;
