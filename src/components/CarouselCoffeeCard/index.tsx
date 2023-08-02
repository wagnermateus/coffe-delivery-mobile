import { View, Image, Text, Pressable } from "react-native";

import { CoffeDTO } from "../../dtos/coffeeDTO";
import { Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  
  FadeInRight,
} from "react-native-reanimated";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export function CarouselCoffeeCard({
  id,
  description,
  image,
  name,
  price,
  category,
}: CoffeDTO) {
  const navigation = useNavigation();
  const scale = useSharedValue(1);

  const animatedStyleContainer = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

 

  function onShowProduct() {
    navigation.navigate("product", { id });
  }
  return (
    <PressableAnimated
      style={[Styles.Container, animatedStyleContainer]}
      onPress={onShowProduct}
      entering={FadeInRight.delay(600)}
    >
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
    </PressableAnimated>
  );
}
