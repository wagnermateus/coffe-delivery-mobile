import { TouchableOpacity, Text, View } from "react-native";
import { Styles } from "./styles";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

export function CoffeeQuantityButtons() {
  const { currentAmountOfCoffeeInMl, selectAmountOfCoffeeInMl } = useCart();

  return (
    <View style={Styles.Container}>
      <TouchableOpacity
        style={
          currentAmountOfCoffeeInMl === "114ml"
            ? Styles.SelectedOptionButton
            : Styles.Button
        }
        onPress={() => selectAmountOfCoffeeInMl("114ml")}
      >
        <Text
          style={
            currentAmountOfCoffeeInMl === "114ml"
              ? Styles.SelectedOptionButtonTitle
              : Styles.ButtonTitle
          }
        >
          114ml
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          currentAmountOfCoffeeInMl === "140ml"
            ? Styles.SelectedOptionButton
            : Styles.Button
        }
        onPress={() => selectAmountOfCoffeeInMl("140ml")}
      >
        <Text
          style={
            currentAmountOfCoffeeInMl === "140ml"
              ? Styles.SelectedOptionButtonTitle
              : Styles.ButtonTitle
          }
        >
          140ml
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          currentAmountOfCoffeeInMl === "227ml"
            ? Styles.SelectedOptionButton
            : Styles.Button
        }
        onPress={() => selectAmountOfCoffeeInMl("227ml")}
      >
        <Text
          style={
            currentAmountOfCoffeeInMl === "227ml"
              ? Styles.SelectedOptionButtonTitle
              : Styles.ButtonTitle
          }
        >
          227ml
        </Text>
      </TouchableOpacity>
    </View>
  );
}
