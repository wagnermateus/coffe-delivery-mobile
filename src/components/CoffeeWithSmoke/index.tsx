import { View, Image } from "react-native";
import Cup from "../../assets/cup.png";
import Smoke from "../../assets/smoke.svg";
import { Style } from "./style";

export function CoffeeWithSmoke() {
  return (
    <View style={Style.Container}>
      <Smoke style={Style.Smoke} />
      <Image source={Cup} alt="chávena de café" style={Style.Cup} />
    </View>
  );
}
