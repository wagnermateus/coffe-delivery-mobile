import { ShoppingCart } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../styles/theme";
import { Styles } from "./styles";
import { useCart } from "../../hooks/useCart";
import { useNavigation } from "@react-navigation/native";

export function CartButton() {
  const { quantityOfItemsInCart, items } = useCart();
  const noItemsInCart = items.length === 0;
  const navigation = useNavigation();
  const isEmpty = quantityOfItemsInCart === 0;

  function handleGoToCart() {
    navigation.navigate("cart");
  }
  return (
    <TouchableOpacity onPress={handleGoToCart}>
      {!isEmpty && (
        <View style={Styles.CounterBall}>
          <Text style={Styles.Counter}>{quantityOfItemsInCart}</Text>
        </View>
      )}

      <ShoppingCart
        color={isEmpty ? THEME.COLORS.YELLOW_DARK : THEME.COLORS.PURPLE}
        size={20}
        weight="fill"
      />
    </TouchableOpacity>
  );
}
