import { View, Image, Text, TouchableOpacity } from "react-native";
import { Counter } from "../Counter";
import { Trash } from "phosphor-react-native";
import { Styles } from "./styles";
import { THEME } from "../../styles/theme";
import { ItemProps } from "../../contexts/CartContext";
import { useCart } from "../../hooks/useCart";

export function CartItem({
  amountInMl,
  id,
  image,
  name,
  price,
  quantity,
}: ItemProps) {
  const { removeItemFromCart } = useCart();

  return (
    <View style={Styles.Container}>
      <Image
        source={image}
        alt="Chávena de café"
        resizeMode="contain"
        style={Styles.Image}
      />

      <View style={Styles.Info}>
        <Text style={Styles.Name}>{name}</Text>
        <Text style={Styles.Quantity}>{amountInMl}</Text>
        <View style={Styles.Controls}>
          <View style={Styles.CounterContainer}>
            <Counter value={quantity} id={id} />
          </View>
          <TouchableOpacity
            style={Styles.DeleteButton}
            onPress={() => removeItemFromCart(id)}
          >
            <Trash color={THEME.COLORS.PURPLE} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={Styles.Price}>Kzs {price}</Text>
    </View>
  );
}
