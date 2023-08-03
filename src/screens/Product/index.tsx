import { View, Text, ScrollView } from "react-native";
import { Styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import { CartButton } from "../../components/CartButton";
import { useNavigation, useRoute } from "@react-navigation/native";

import { COFFES } from "../../data/coffes";

import { CoffeeQuantityButton } from "../../components/CoffeeQuantityButtons";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { CoffeeWithSmoke } from "../../components/CoffeeWithSmoke";
import { GoBackButton } from "../../components/GoBackButton";
import { useCart } from "../../hooks/useCart";
import { ItemProps } from "../../contexts/CartContext";
import { useState } from "react";
type RouteParamsProps = {
  id: number;
};

export function Product() {
  const [selectedQuantity, setSelectedQuantity] = useState<
    "114ml" | "140ml" | "227ml" | undefined
  >(undefined);

  const { addItemToCart, currentCounterValue } = useCart();
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as RouteParamsProps;

  const coffee = COFFES.find((item) => item.id === id)!;

  function handleSelectQuantity(quantity: typeof selectedQuantity) {
    setSelectedQuantity(quantity);
  }
  function handleAddToCart() {
    if (selectedQuantity !== undefined) {
      const item: ItemProps = {
        id: coffee.id,
        name: coffee.name,
        image: coffee.image,
        price: coffee.price,
        amountInMl: selectedQuantity,
        quantity: currentCounterValue,
      };

      addItemToCart(item);
      navigation.navigate("catalog");
    } else {
    }
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
          <View style={Styles.QuantityButtons}>
            <CoffeeQuantityButton
              title="114ml"
              isChecked={selectedQuantity === "114ml"}
              onPress={() => handleSelectQuantity("114ml")}
            />
            <CoffeeQuantityButton
              title="140ml"
              isChecked={selectedQuantity === "140ml"}
              onPress={() => handleSelectQuantity("140ml")}
            />
            <CoffeeQuantityButton
              title="227ml"
              isChecked={selectedQuantity === "227ml"}
              onPress={() => handleSelectQuantity("227ml")}
            />
          </View>
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
