import React from "react";
import { Text, I18nManager, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "../localization/i18n";
import * as Updates from "expo-updates";
import AppConstants from "../constants/AppConstants";
import colors from "../constants/Colors";
import styles from "../constants/Styles";

const LanguageSwitch = ({ buttonTitle }) => {
  const onClick = async () => {
    const { asyncStorage } = AppConstants;

    const currentLanguage = await AsyncStorage.getItem(
      asyncStorage.selectedLanguage
    );
    const updatedLanguage =
      currentLanguage === AppConstants.languages.ar
        ? AppConstants.languages.en
        : AppConstants.languages.ar;

    const isLangRTL = updatedLanguage === AppConstants.languages.ar;

    await AsyncStorage.setItem(asyncStorage.selectedLanguage, updatedLanguage);

    i18n.changeLanguage(updatedLanguage.toLowerCase()).then(() => {
      if (isLangRTL !== I18nManager.isRTL) {
        I18nManager.allowRTL(isLangRTL);
        I18nManager.forceRTL(isLangRTL);
        Updates.reloadAsync(); // Force reload to apply RTL changes
      }
    });
  };

  return (
    <Pressable onPress={onClick} style={styles.languageButtonContainer}>
      <Text style={styles.languageButton}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default LanguageSwitch;
