import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList } from "react-native";
import { Styles } from "./styles";

import { Button } from "../../components/Button";
import { GoBackButton } from "../../components/GoBackButton";
import { CartItem } from "../../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../hooks/useCart";

export function Cart() {
  const { items, totalPayable, clearCart } = useCart();
  const navigation = useNavigation();

  const noItemsInCart = items.length === 0;

  function handleConfirmOrder() {
    navigation.navigate("checkout");
    clearCart();
  }

  return (
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.Header}>
        <GoBackButton type="secondary" />
        <Text style={Styles.Title}>Carrinho</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <CartItem
              id={item.id}
              amountInMl={item.amountInMl}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          )}
          ListEmptyComponent={() => (
            <Text>Ups! O seu carrinho está vazio!</Text>
          )}
        />
      </View>

      <View style={Styles.Footer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={Styles.TotalText}>Valor total</Text>
          <Text style={Styles.TotalValue}>KZS {totalPayable}</Text>
        </View>

        <Button
          disabled={noItemsInCart}
          title="Confirmar pedido"
          type="secondary"
          onPress={handleConfirmOrder}
        />
      </View>
    </SafeAreaView>
  );
}
