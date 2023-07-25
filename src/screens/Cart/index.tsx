import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { Styles } from "./styles";

import { Button } from "../../components/Button";
import { GoBackButton } from "../../components/GoBackButton";
import { CartItem } from "../../components/CartItem";

export function Cart() {
  return (
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.Header}>
        <GoBackButton type="secondary" />
        <Text style={Styles.Title}>Carrinho</Text>
      </View>
      <CartItem />
      <CartItem />

      <View style={Styles.Footer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={Styles.TotalText}>Valor total</Text>
          <Text style={Styles.TotalValue}>KZS 9,90</Text>
        </View>
        <Button title="Confirmar pedido" type="secondary" />
      </View>
    </SafeAreaView>
  );
}
