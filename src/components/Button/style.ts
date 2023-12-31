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
  },
  Title: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    textTransform: "uppercase",
    color: THEME.COLORS.WHITE,
  },

  Primary: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,
  },
  Secondary: {
    backgroundColor: THEME.COLORS.YELLOW_DARK,
  },
});
