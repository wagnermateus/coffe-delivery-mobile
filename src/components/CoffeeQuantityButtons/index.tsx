import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Styles } from "./styles";

type CoffeeQuantityButton = TouchableOpacityProps & {
  title: "114ml" | "140ml" | "227ml";
  isChecked: boolean;
};

export function CoffeeQuantityButton({
  title,
  isChecked = false,
  ...rest
}: CoffeeQuantityButton) {
  return (
    <TouchableOpacity
      style={isChecked ? Styles.SelectedOptionButton : Styles.Container}
      activeOpacity={0.7}
      {...rest}
    >
      <Text
        style={
          isChecked ? Styles.SelectedOptionButtonTitle : Styles.ButtonTitle
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
