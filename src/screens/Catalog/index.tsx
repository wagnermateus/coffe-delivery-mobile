import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  SectionList,
  ScrollViewProps,
  ScrollView,
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
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Animated, {
  FadeInUp,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

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

  const scrollY = useSharedValue(0);

  const sectionListRef = useRef<SectionList>(null);

  function handleScrollToSection(sectionIndex: number) {
    sectionListRef.current?.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewOffset: 0,
    });
  }

  const fixedNavbar = useAnimatedStyle(() => {
    return {
      //position: "absolute",
    };
  });
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      console.log(event.contentOffset.y);
    },
  });
  const animatedCatogoryList = useAnimatedStyle(() => {
    return {
      backgroundColor: THEME.COLORS.GREY_900,
      paddingHorizontal: 32,
      borderBottomColor: THEME.COLORS.GREY_700,
      borderBottomWidth: 1,
      display: "none",
    };
  });
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
    <SafeAreaView style={Styles.Container}>
      <Animated.View style={[Styles.Navbar, fixedNavbar]}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MapPin size={20} color={THEME.COLORS.PURPLE} weight="fill" />

          <Text style={Styles.Location}>Kilamba Kiaxi, LD</Text>
        </View>
        <CartButton />
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        scrollEnabled={true}
      >
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

        <View style={Styles.Coffes}>
          <FlatList
            data={carouselCoffes}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              bottom: 80,
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

          <Animated.View
            style={Styles.CoffeList}
            entering={FadeInUp.delay(600)}
          >
            <Text style={Styles.CoffesSectionTitle}>Nossos cafés</Text>
            <View style={Styles.CategoryList}>
              <TouchableOpacity onPress={() => handleScrollToSection(0)}>
                <Text style={Styles.Category}>Tradicionais</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleScrollToSection(1)}>
                <Text style={Styles.Category}>Doces</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleScrollToSection(2)}>
                <Text style={Styles.Category}>Especiais</Text>
              </TouchableOpacity>
            </View>
            <SectionList
              scrollEnabled={false}
              ref={sectionListRef}
              sections={coffesSections}
              keyExtractor={(item) => item.id}
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
          </Animated.View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
