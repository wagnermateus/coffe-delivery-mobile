import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./styles";
import { CartButton } from "../../components/CartButton";
import { MagnifyingGlass, MapPin } from "phosphor-react-native";
import headerBackgroundImage from "../../assets/coffe-bg.png";
import { THEME } from "../../styles/theme";
import { CarouselCoffeeCard } from "../../components/CarouselCoffeeCard";
import { COFFES } from "../../data/coffes";
import { CoffeeCard } from "../../components/CoffeCard";

export function Catalog() {
  const carouselCoffes = COFFES[1].data;

  return (
    <ScrollView>
      <SafeAreaView style={Styles.Container}>
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

        <View style={Styles.SearchBar}>
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
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Image
              source={headerBackgroundImage}
              resizeMode="cover"
              alt=""
              style={{
                right: -28,
              }}
            />
          </View>
        </View>
        <View style={Styles.Coffes}>
          <FlatList
            data={carouselCoffes}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              bottom: 85,
            }}
            contentContainerStyle={{
              gap: 32,
              paddingTop: 30,
              paddingBottom: 5,
              paddingHorizontal: 32,
            }}
            renderItem={({ item }) => (
              <CarouselCoffeeCard
                description={item.description}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                category={"Tradicional"}
              />
            )}
          />
          <View style={Styles.CoffeList}>
            <Text style={Styles.CoffesSectionTitle}>Nossos cafés</Text>
            <View style={Styles.CategoryList}>
              <TouchableOpacity>
                <Text style={Styles.Category}>Tradicionais</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={Styles.Category}>Doces</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={Styles.Category}>Especiais</Text>
              </TouchableOpacity>
            </View>
            <SectionList
              data={COFFES}
              sections={COFFES}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <CoffeeCard
                  description={item.description}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={Styles.CategoryName}>{title}</Text>
              )}
              contentContainerStyle={{
                gap: 32,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
