import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Styles } from "./style";

type ButtonProps = TouchableOpacityProps & {
  type: "primary" | "secondary";
  title: string;
};
export function Button({ title, type = "primary", ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        type === "primary"
          ? [Styles.Container, Styles.Primary]
          : [Styles.Container, Styles.Secondary]
      }
      {...rest}
    >
      <Text style={Styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
}
