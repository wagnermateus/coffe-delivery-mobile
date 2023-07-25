import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
export const Styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "transparent",
    padding: 8,
  },
  CounterValue: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
});
