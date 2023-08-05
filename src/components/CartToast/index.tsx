import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import { useCart } from "../../hooks/useCart";
import { ArrowRight, ShoppingCart } from "phosphor-react-native";
import { THEME } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";

export function CartToast() {
  const { items } = useCart();
  const navigation = useNavigation();

  const coffee = items[items.length - 1];

  function handleSeeCart() {
    navigation.navigate("cart");
  }
  return (
    <View style={Styles.Container}>
      <View>
        <View style={Styles.CounterBall}>
          <Text style={Styles.Counter}>{coffee.quantity}</Text>
        </View>
        <View style={Styles.IconContainer}>
          <ShoppingCart color={THEME.COLORS.WHITE} size={20} weight="fill" />
        </View>
      </View>

      <Text style={Styles.Description}>
        {coffee.quantity} {coffee.quantity === 1 ? "café" : "cafés"}{" "}
        <Text style={{ fontWeight: "bold" }}>{coffee.name}</Text> de{" "}
        <Text style={{ fontWeight: "bold" }}>{coffee.amountInMl}</Text>{" "}
        adicionado ao carrinho
      </Text>

      <TouchableOpacity style={Styles.Button} onPress={handleSeeCart}>
        <Text style={Styles.ButtonTitle}>Ver</Text>
        <ArrowRight color={THEME.COLORS.PURPLE} size={16} />
      </TouchableOpacity>
    </View>
  );
}
