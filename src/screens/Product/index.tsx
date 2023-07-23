import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import { CartButton } from "../../components/CartButton";
import { useNavigation } from "@react-navigation/native";

export function Product() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.Navbar}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft />
        </TouchableOpacity>
        <CartButton />
      </View>
    </SafeAreaView>
  );
}
