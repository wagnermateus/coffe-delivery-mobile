import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    width: 208,

    backgroundColor: THEME.COLORS.GREY_800,

    alignItems: "center",

    paddingHorizontal: 16,
    paddingBottom: 20,

    borderTopRightRadius: 36,
    borderBottomLeftRadius: 6,
    borderRadius: 6,

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  Content: {
    alignItems: "center",
    gap: 14,
  },
  Details: {
    alignItems: "center",
    gap: 4,
  },
  Category: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: 10,
    justifyContent: "center",
    textTransform: "uppercase",
    color: THEME.COLORS.PURPLE_DARK,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: THEME.COLORS.PURPLE_LIGHT,
    borderRadius: 100,
  },
  Name: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GREY_200,
  },
  Description: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 12,
    color: THEME.COLORS.GREY_400,
    textAlign: "center",
  },
  Price: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.YELLOW_DARK,
  },
  Currency: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
    color: THEME.COLORS.YELLOW_DARK,
  },
  Image: {
    bottom: 32,
  },
});
