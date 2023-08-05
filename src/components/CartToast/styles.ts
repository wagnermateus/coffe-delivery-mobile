import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 32,
    paddingVertical: 20,
    backgroundColor: THEME.COLORS.WHITE,
  },
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
  IconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: THEME.COLORS.GREY_500,
    borderRadius: 6,
  },
  Description: {
    flex: 1,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    color: THEME.COLORS.GREY_400,
    fontSize: THEME.FONT_SIZE.XS,
  },
  Button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ButtonTitle: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    color: THEME.COLORS.PURPLE,
    fontSize: 12,
    textTransform: "uppercase",
  },
});
