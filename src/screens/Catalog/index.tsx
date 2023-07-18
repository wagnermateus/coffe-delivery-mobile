import { View, Text, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./styles";
import { CartButton } from "../../components/CartButton";
import { MagnifyingGlass, MapPin } from "phosphor-react-native";
import headerBackgroundImage from "../../assets/coffe-bg.png";
import { THEME } from "../../styles/theme";

export function Catalog() {
  return (
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.Header}>
        <View style={Styles.Navbar}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 48,
            }}
          >
            <Text>
              <MapPin size={20} color={THEME.COLORS.PURPLE} weight="fill" />
            </Text>
            <Text style={Styles.Location}>Kilamba Kiaxi, LD</Text>
          </View>
          <CartButton />
        </View>
        <Text style={Styles.Title}>
          Encontre o café perfeito para qualquer hora do dia
        </Text>
        <View style={Styles.InputWrapper}>
          <MagnifyingGlass size={16} color={THEME.COLORS.GREY_400} />
          <TextInput
            style={Styles.Input}
            placeholder="Pesquisar"
            placeholderTextColor={THEME.COLORS.GREY_400}
          />
        </View>
        <View>
          <Image
            source={headerBackgroundImage}
            resizeMode="cover"
            alt=""
            style={{
              borderWidth: 1,
              position: "absolute",
              right: -28,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
