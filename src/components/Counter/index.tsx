import { Minus, Plus } from "phosphor-react-native";
import { TouchableOpacity, Text, View } from "react-native";
import { THEME } from "../../styles/theme";
import { Styles } from "./styles";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

type CounterProps = {
  value?: number;
  id?: number;
};
export function Counter({ id, value }: CounterProps) {
  const [quantityChosen, setQuantityChosen] = useState(value);
  const {
    decrementTheCounterValue,
    incrementTheCounterValue,
    currentCounterValue,
    items,
    calculateTheTotalAmountPayable,
  } = useCart();

  function increaseTheNumberOfCups() {
    const index = items.findIndex((item) => item.id === id);

    if (quantityChosen && quantityChosen < 20) {
      setQuantityChosen((prevState) => prevState! + 1);

      items[index].quantity = quantityChosen + 1;

      calculateTheTotalAmountPayable();
    }
  }

  function reduceTheNumberOfCups() {
    const index = items.findIndex((item) => item.id === id);

    if (quantityChosen && quantityChosen > 1) {
      setQuantityChosen((prevState) => prevState! - 1);

      items[index].quantity = quantityChosen - 1;

      calculateTheTotalAmountPayable();
    }
  }
  return (
    <View style={Styles.Container}>
      <TouchableOpacity
        onPress={value ? reduceTheNumberOfCups : decrementTheCounterValue}
      >
        <Text>
          <Minus weight="bold" color={THEME.COLORS.PURPLE} size={20} />
        </Text>
      </TouchableOpacity>
      <Text style={Styles.CounterValue}>
        {value ? quantityChosen : currentCounterValue}
      </Text>
      <TouchableOpacity
        onPress={value ? increaseTheNumberOfCups : incrementTheCounterValue}
      >
        <Text>
          <Plus weight="bold" color={THEME.COLORS.PURPLE} size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
