import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    paddingTop: 16,
    backgroundColor: THEME.COLORS.GREY_100,
  },
  Navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    paddingHorizontal: 32,
  },
  Main: {
    zIndex: 1,
    paddingHorizontal: 32,
  },
  CategoryTag: {
    textAlign: "center",
    width: 90,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: THEME.COLORS.GREY_200,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,
    textTransform: "uppercase",
    color: THEME.COLORS.WHITE,
    marginBottom: 12,
  },
  Price: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  Name: {
    flex: 1,
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.WHITE,
  },
  Value: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.XL,
    color: THEME.COLORS.YELLOW,
  },
  Currency: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
    color: THEME.COLORS.YELLOW,
  },
  Description: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_500,
    marginBottom: 33,
  },
  Footer: {
    paddingTop: 42,
    paddingBottom: 32,
    paddingHorizontal: 32,
    backgroundColor: THEME.COLORS.GREY_900,
  },
  FooterTitle: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_400,
    marginBottom: 8,
  },

  AddToCart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,

    padding: 8,
    marginTop: 20,

    backgroundColor: THEME.COLORS.GREY_700,
  },
});
