import { View, Image, Text } from "react-native";
import { CoffeDTO } from "../../dtos/coffeeDTO";
import { Styles } from "./styles";

export function CarouselCoffeeCard({
  description,
  image,
  name,
  price,
  category,
}: CoffeDTO) {
  return (
    <View style={Styles.Container}>
      <Image source={image} alt="Café" style={Styles.Image} />
      <View style={Styles.Content}>
        <Text style={Styles.Category}> {category}</Text>

        <View style={Styles.Details}>
          <Text style={Styles.Name}>{name}</Text>
          <Text style={Styles.Description}>{description}</Text>
        </View>
        <Text style={Styles.Price}>
          {price}
          <Text style={Styles.Currency}>Kzs</Text>
        </Text>
      </View>
    </View>
  );
}
