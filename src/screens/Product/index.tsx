import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import { CartButton } from "../../components/CartButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { THEME } from "../../styles/theme";
import { COFFES } from "../../data/coffes";
import { Loading } from "../../components/Loading";

import { CoffeeQuantityButtons } from "../../components/CoffeeQuantityButtons";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { CoffeeWithSmoke } from "../../components/CoffeeWithSmoke";
type RouteParamsProps = {
  id: number;
};

export function Product() {
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as RouteParamsProps;

  const coffee = COFFES.find((item) => item.id === id);

  function handleGoBack() {
    navigation.goBack();
  }
  if (!coffee) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <SafeAreaView style={Styles.Container}>
        <View style={Styles.Navbar}>
          <TouchableOpacity onPress={handleGoBack}>
            <ArrowLeft color={THEME.COLORS.WHITE} size={THEME.FONT_SIZE.LG} />
          </TouchableOpacity>
          <CartButton isEmpty={false} />
        </View>
        <View style={Styles.Main}>
          <Text style={Styles.CategoryTag}>{coffee.category}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 20,
            }}
          >
            <Text style={Styles.Name}>{coffee.name}</Text>
            <View style={Styles.Price}>
              <Text style={Styles.Currency}>kzs </Text>
              <Text style={Styles.Value}>{coffee.price}</Text>
            </View>
          </View>
          <Text style={Styles.Description}>{coffee.description}</Text>
          <CoffeeWithSmoke />
        </View>
        <View style={Styles.Footer}>
          <Text style={Styles.FooterTitle}>Selecione o tamanho:</Text>
          <CoffeeQuantityButtons />
          <View style={Styles.AddToCart}>
            <Counter />
            <Button title="Adicionar" type="primary" />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
