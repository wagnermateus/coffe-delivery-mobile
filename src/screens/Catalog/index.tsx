import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
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
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Animated, {
  FadeInUp,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { CartToast } from "../../components/CartToast";

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);
type CoffesSectionsProps = typeof COFFES_SECTIONS;

type FormDataProps = {
  coffeeName: string;
};
const SearchCoffesSchema = yup.object({
  coffeeName: yup.string().required(),
});
export function Catalog() {
  const [scrollValue, setScrollValue] = useState(0);
  const [coffesSections, setCoffesSction] =
    useState<CoffesSectionsProps>(COFFES_SECTIONS);

  const { handleSubmit, watch, control } = useForm<FormDataProps>({
    resolver: yupResolver(SearchCoffesSchema),
  });
  const carouselCoffes = [COFFES[0], COFFES[5], COFFES[10]];

  const searchInputIsEmpty =
    watch("coffeeName") === undefined || watch("coffeeName").length === 0;

  const scrollY = useSharedValue(0);

  const sectionListRef = useAnimatedRef<SectionList>();

  function handleScrollToSection(sectionIndex: number) {
    sectionListRef.current?.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewOffset: 0,
    });
  }

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [22, 533],
        [THEME.COLORS.GREY_100, THEME.COLORS.GREY_900]
      ),
    };
  });

  const animatedNavbarTextStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [22, 533],
        [THEME.COLORS.GREY_900, THEME.COLORS.GREY_200]
      ),
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
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
    <AnimatedSafeAreaView style={[Styles.Container, animatedContainerStyles]}>
      <Animated.View style={[Styles.Navbar]}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MapPin size={20} color={THEME.COLORS.PURPLE} weight="fill" />

          <Animated.Text style={[Styles.Location, animatedNavbarTextStyles]}>
            Kilamba Kiaxi, LD
          </Animated.Text>
        </View>
        <CartButton />
      </Animated.View>

      <AnimatedSectionList
        onScroll={scrollHandler}
        ref={sectionListRef}
        sections={coffesSections}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Animated.View style={animatedContainerStyles}>
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
              </Animated.View>
            </View>
          </Animated.View>
        )}
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
        style={Styles.Content}
      />
      <CartToast />
    </AnimatedSafeAreaView>
  );
}
