import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  CounterBall: {
    width: 20,
    height: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.PURPLE,
    position: "absolute",

    right: -15,
    top: -17,
  },
  Counter: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 12,
  },
});
