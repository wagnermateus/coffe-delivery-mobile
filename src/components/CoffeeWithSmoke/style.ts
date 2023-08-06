import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  Container: {
    zIndex: 1,
    bottom: -50,
    justifyContent: "center",
    alignItems: "center",
  },
  Smoke: {
    position: "absolute",
    alignSelf: "center",
    bottom: 220,
  },
  Cup: {
    width: "100%",
  },
  Canvas: {
    position: "absolute",
    bottom: 220,
    width: 100,
    height: 137,

    zIndex: 1,
  },
});
