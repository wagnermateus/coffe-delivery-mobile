import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    gap: 8,
  },
  Button: {
    width: "31.5%",
    height: 40,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTitle: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_300,
  },
});
