import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.WHITE,
  },

  Title: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.YELLOW_DARK,
    marginTop: 40,
  },
  Subtitle: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
    color: THEME.COLORS.GREY_200,
    maxWidth: 259,
    lineHeight: 18.2,
    textAlign: "center",
  },
  ButtonContainer: {
    width: 247,
    height: 46,
    marginTop: 64,
  },
});
