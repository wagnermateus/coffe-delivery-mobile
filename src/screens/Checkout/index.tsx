import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Deliveryman from "../../assets/deliveryman.svg";
import { Button } from "../../components/Button";
import { Styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export function Checkout() {
  const navigation = useNavigation();
  function handleGoToGome() {
    navigation.navigate("catalog");
  }
  return (
    <SafeAreaView style={Styles.Container}>
      <Deliveryman />
      <Text style={Styles.Title}>Uhu! Pedido confirmado</Text>
      <Text style={Styles.Subtitle}>
        Agora é só aguardar que logo o café chegará até você!
      </Text>
      <View style={Styles.ButtonContainer}>
        <Button
          title="Ir para a home"
          type="primary"
          onPress={handleGoToGome}
        />
      </View>
    </SafeAreaView>
  );
}
