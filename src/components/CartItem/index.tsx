import { View, Image, Text, TouchableOpacity } from "react-native";
import americano from "../../assets/americano.png";
import { Counter } from "../Counter";
import { Trash } from "phosphor-react-native";
import { Styles } from "./styles";
import { THEME } from "../../styles/theme";

export function CartItem() {
  return (
    <View style={Styles.Container}>
      <Image
        source={americano}
        alt="Chávena de café"
        resizeMode="contain"
        style={Styles.Image}
      />

      <View style={Styles.Info}>
        <Text style={Styles.Name}>Irlandês</Text>
        <Text style={Styles.Quantity}>227ml</Text>
        <View style={Styles.Controls}>
          <View style={Styles.CounterContainer}>
            <Counter />
          </View>
          <TouchableOpacity style={Styles.DeleteButton}>
            <Trash color={THEME.COLORS.PURPLE} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={Styles.Price}>KZS 9,90</Text>
    </View>
  );
}
