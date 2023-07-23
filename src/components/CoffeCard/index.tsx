import { View, Image, Text, TouchableOpacity } from "react-native";
import { CoffeDTO } from "../../dtos/coffeeDTO";
import { Styles } from "./styles";

export function CoffeeCard({ description, image, name, price }: CoffeDTO) {
  return (
    <TouchableOpacity style={Styles.Container}>
      <Image source={image} alt="Café" style={Styles.Image} />
      <View style={Styles.Content}>
        <View style={Styles.Details}>
          <Text style={Styles.Name}>{name}</Text>
          <Text style={Styles.Description}>{description}</Text>
        </View>
        <Text style={Styles.Price}>
          {price}
          <Text style={Styles.Currency}>Kzs</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}
