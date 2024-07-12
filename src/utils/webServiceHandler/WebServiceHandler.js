import AsyncStorage from "@react-native-async-storage/async-storage";
import GET_PRODUCTS_LIST from "../../constants/ApiConstants";
import AppConstants from "../../constants/AppConstants";

export const getProductsData = async () => {
  try {
    const userLang = await AsyncStorage.getItem(
      AppConstants.asyncStorage.selectedLanguage
    );
    const url = GET_PRODUCTS_LIST + userLang.toLowerCase();
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
};
