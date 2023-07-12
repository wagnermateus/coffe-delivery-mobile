import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Catalog } from "../screens/Catalog";

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="catalog" component={Catalog} />
      </Navigator>
    </NavigationContainer>
  );
}
