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
import { COFFES, COFFES_SECTIONS } from "../../data/coffes";
import { CoffeeCard } from "../../components/CoffeCard";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type CoffesSectionsProps = typeof COFFES_SECTIONS;

type FormDataProps = {
  coffeeName: string;
};
const SearchCoffesSchema = yup.object({
  coffeeName: yup.string().required(),
});
export function Catalog() {
  const [coffesSections, setCoffesSction] =
    useState<CoffesSectionsProps>(COFFES_SECTIONS);

  const { handleSubmit, watch, control } = useForm<FormDataProps>({
    resolver: yupResolver(SearchCoffesSchema),
  });
  const carouselCoffes = [COFFES[0], COFFES[5], COFFES[10]];

  const searchInputIsEmpty =
    watch("coffeeName") === undefined || watch("coffeeName").length === 0;

  function handleSearchCoffe({ coffeeName }: FormDataProps) {
    const foundCoffees: CoffesSectionsProps = [];

    for (let section of COFFES_SECTIONS) {
      const coffeesInSection = section.data.filter((coffee) =>
        coffee.name.toLowerCase().includes(coffeeName.toLowerCase())
      );
      if (coffeesInSection.length > 0) {
        foundCoffees.push({
          title: section.title,
          data: [...coffeesInSection],
        });
      }
    }
    setCoffesSction(foundCoffees);
  }
  useEffect(() => {
    if (searchInputIsEmpty) {
      setCoffesSction(COFFES_SECTIONS);
    }
  }, [searchInputIsEmpty]);
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
            <MapPin size={20} color={THEME.COLORS.PURPLE} weight="fill" />

            <Text style={Styles.Location}>Kilamba Kiaxi, LD</Text>
          </View>
          <CartButton isEmpty />
        </View>

        <View style={Styles.SearchBar}>
          <Text style={Styles.Title}>
            Encontre o café perfeito para qualquer hora do dia
          </Text>
          <View style={Styles.InputWrapper}>
            <MagnifyingGlass size={16} color={THEME.COLORS.GREY_400} />
            <Controller
              control={control}
              name="coffeeName"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={Styles.Input}
                  placeholder="Pesquisar"
                  placeholderTextColor={THEME.COLORS.GREY_400}
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSearchCoffe)}
                  returnKeyType="send"
                />
              )}
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
                category={item.category}
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
              sections={coffesSections}
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
              ListEmptyComponent={() => (
                <Text style={{ marginBottom: 50 }}>
                  Ups!Nenhum café foi encontrado !
                </Text>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
