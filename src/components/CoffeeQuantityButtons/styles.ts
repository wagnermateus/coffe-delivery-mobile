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

  SelectedOptionButton: {
    width: "31.5%",
    height: 40,
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE,
    justifyContent: "center",
    alignItems: "center",
  },

  SelectedOptionButtonTitle: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.PURPLE,
  },
});
