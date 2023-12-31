import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Catalog } from "../screens/Catalog";
import { Product } from "../screens/Product";
import { Cart } from "../screens/Cart";
import { Checkout } from "../screens/Checkout";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="catalog" component={Catalog} />
      <Screen name="product" component={Product} />
      <Screen name="cart" component={Cart} />
      <Screen name="checkout" component={Checkout} />
    </Navigator>
  );
}
