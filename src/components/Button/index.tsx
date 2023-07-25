import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Styles } from "./style";

type ButtonProps = TouchableOpacityProps & {
  type: "primary" | "secondary";
  title: string;
};
export function Button({ title, type = "primary", ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={Styles.Container} {...rest}>
      <Text style={Styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
}
