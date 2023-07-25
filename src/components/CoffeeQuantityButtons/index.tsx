import { TouchableOpacity, Text, View } from "react-native";
import { Styles } from "./styles";

export function CoffeeQuantityButtons() {
  return (
    <View style={Styles.Container}>
      <TouchableOpacity style={Styles.Button}>
        <Text style={Styles.ButtonTitle}>114ml</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.Button}>
        <Text style={Styles.ButtonTitle}>140ml</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.Button}>
        <Text style={Styles.ButtonTitle}>227ml</Text>
      </TouchableOpacity>
    </View>
  );
}
