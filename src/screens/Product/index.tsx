import { View, Text, ScrollView } from "react-native";
import { Styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import { CartButton } from "../../components/CartButton";
import { useNavigation, useRoute } from "@react-navigation/native";

import { COFFES } from "../../data/coffes";
import { Loading } from "../../components/Loading";

import { CoffeeQuantityButtons } from "../../components/CoffeeQuantityButtons";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { CoffeeWithSmoke } from "../../components/CoffeeWithSmoke";
import { GoBackButton } from "../../components/GoBackButton";
import { useCart } from "../../hooks/useCart";
import { ItemProps } from "../../contexts/CartContext";
type RouteParamsProps = {
  id: number;
};

export function Product() {
  const { addItemToCart, currentAmountOfCoffeeInMl, currentCounterValue } =
    useCart();
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as RouteParamsProps;

  const coffee = COFFES.find((item) => item.id === id)!;

  function handleAddToCart() {
    const item: ItemProps = {
      id: coffee.id,
      name: coffee.name,
      image: coffee.image,
      price: coffee.price,
      amountInMl: currentAmountOfCoffeeInMl,
      quantity: currentCounterValue,
    };

    addItemToCart(item);
    navigation.navigate("catalog");
  }
  if (!coffee) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <SafeAreaView style={Styles.Container}>
        <View style={Styles.Navbar}>
          <GoBackButton type="primary" />
          <CartButton />
        </View>
        <View style={Styles.Main}>
          <Text style={Styles.CategoryTag}>{coffee.category}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 20,
            }}
          >
            <Text style={Styles.Name}>{coffee.name}</Text>
            <View style={Styles.Price}>
              <Text style={Styles.Currency}>kzs </Text>
              <Text style={Styles.Value}>{coffee.price}</Text>
            </View>
          </View>
          <Text style={Styles.Description}>{coffee.description}</Text>
          <CoffeeWithSmoke />
        </View>
        <View style={Styles.Footer}>
          <Text style={Styles.FooterTitle}>Selecione o tamanho:</Text>
          <CoffeeQuantityButtons />
          <View style={Styles.AddToCart}>
            <Counter />
            <Button
              title="Adicionar"
              type="primary"
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
