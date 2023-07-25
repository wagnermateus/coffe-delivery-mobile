import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PURPLE_DARK,
  },
  Title: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    textTransform: "uppercase",
    color: THEME.COLORS.WHITE,
  },
});
