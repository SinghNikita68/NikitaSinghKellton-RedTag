import { useFonts } from "expo-font";
import { ProductsProvider } from "../contexts/ProductsContext";
import ProductList from "./ProductList";

export default function Index() {
  let [fontsLoaded, fontError] = useFonts({
    "Tajawal-Regular": require("../../assets/fonts/Tajawal-Regular.ttf"),
    "Tajawal-Medium": require("../../assets/fonts/Tajawal-Medium.ttf"),
    "Tajawal-Light": require("../../assets/fonts/Tajawal-Light.ttf"),
    "Tajawal-Bold": require("../../assets/fonts/Tajawal-Bold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ProductsProvider>
      <ProductList />
    </ProductsProvider>
  );
}
