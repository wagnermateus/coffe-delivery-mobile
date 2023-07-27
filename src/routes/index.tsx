import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { THEME } from "../styles/theme";
import { CartContextProvider } from "../contexts/CartContext";

export function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.GREY_800 }}>
      <NavigationContainer>
        <CartContextProvider>
          <AppRoutes />
        </CartContextProvider>
      </NavigationContainer>
    </View>
  );
}
