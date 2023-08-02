import { View, Image, Text, TouchableOpacity } from "react-native";
import { CoffeDTO } from "../../dtos/coffeeDTO";
import { Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CoffeeCard({ id, description, image, name, price }: CoffeDTO) {
  const navigation = useNavigation();
  function onShowProduct() {
    navigation.navigate("product", { id });
  }
  return (
    <TouchableOpacity
      style={Styles.Container}
      onPress={onShowProduct}
      activeOpacity={0.8}
    >
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
