import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Styles = StyleSheet.create({
  Container: {
    maxWidth: 311,

    flexDirection: "row",
    gap: 12,
    backgroundColor: THEME.COLORS.GREY_800,

    paddingHorizontal: 8,
    paddingBottom: 13,

    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderRadius: 6,

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  Content: {
    flex: 1,
    gap: 14,
  },
  Details: {
    paddingTop: 16,
    gap: 4,
  },

  Name: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GREY_200,
  },
  Description: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 12,
    color: THEME.COLORS.GREY_400,
  },
  Price: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.YELLOW_DARK,
  },
  Currency: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XS,
    color: THEME.COLORS.YELLOW_DARK,
  },
  Image: {
    bottom: 32,
  },
});
