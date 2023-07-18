import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_100,
    paddingHorizontal: 32,
    paddingTop: 16,
  },

  Header: {
    backgroundColor: THEME.COLORS.GREY_100,
  },
  Navbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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
});
