import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
  },
  Header: {
    flexDirection: "row",
    gap: 100,
    paddingHorizontal: 32,
    paddingVertical: 26,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_700,
  },

  Title: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_200,
  },
  Footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingTop: 28,
    gap: 20,
    paddingBottom: 40,
    paddingHorizontal: 32,

    backgroundColor: THEME.COLORS.WHITE,

    elevation: 8,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  TotalText: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_200,
  },
  TotalValue: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GREY_200,
  },
});
