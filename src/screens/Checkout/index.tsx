import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Deliveryman from "../../assets/deliveryman.svg";
import { Button } from "../../components/Button";
import { Styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInLeft, FadeInUp } from "react-native-reanimated";

export function Checkout() {
  const navigation = useNavigation();
  function handleGoToGome() {
    navigation.navigate("catalog");
  }
  return (
    <SafeAreaView style={Styles.Container}>
      <Animated.View entering={FadeInLeft.duration(2000).delay(400)}>
        <Deliveryman />
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(600)}>
        <Text style={Styles.Title}>Uhu! Pedido confirmado</Text>
        <Text style={Styles.Subtitle}>
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </Animated.View>
      <Animated.View
        style={Styles.ButtonContainer}
        entering={FadeInUp.delay(800)}
      >
        <Button
          title="Ir para a home"
          type="primary"
          onPress={handleGoToGome}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
