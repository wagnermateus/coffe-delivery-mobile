import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_100,
  },
  Navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 20,
  },
  SearchBar: {
    paddingTop: 20,
    paddingHorizontal: 32,
  },
  Location: {
    color: THEME.COLORS.GREY_900,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
  },
  Title: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 15,
  },
  Input: {
    flex: 1,
    backgroundColor: "transparent",
    color: THEME.COLORS.GREY_900,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
  },
  InputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 42,
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: THEME.COLORS.GREY_200,
  },

  Coffes: {
    backgroundColor: THEME.COLORS.GREY_900,
    marginTop: 54,
  },
  CoffeList: {
    paddingHorizontal: 32,
    gap: 12,
  },
  CoffesSectionTitle: {
    color: THEME.COLORS.GREY_300,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  CategoryList: {
    flexDirection: "row",
    gap: 8,
  },
  Category: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,
    justifyContent: "center",
    textTransform: "uppercase",
    color: THEME.COLORS.PURPLE_DARK,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    borderColor: THEME.COLORS.PURPLE,
    borderWidth: 1,
    marginBottom: 32,
  },

  CategoryName: {
    color: THEME.COLORS.GREY_400,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    paddingHorizontal: 32,
  },
  Content: {
    backgroundColor: THEME.COLORS.GREY_900,
  },
});
