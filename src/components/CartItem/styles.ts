import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_700,

    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  Image: {
    width: 64,
    marginRight: 20,
  },
  Info: {
    marginRight: 30,
  },
  Name: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_100,
  },
  Quantity: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
    color: THEME.COLORS.GREY_400,
  },
  Controls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,

    gap: 8,
  },
  CounterContainer: {
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_600,
    borderRadius: 6,
  },
  DeleteButton: {
    padding: 8,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: THEME.COLORS.GREY_700,
  },
  Price: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_100,
  },
});
