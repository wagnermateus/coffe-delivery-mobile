import { ShoppingCart } from "phosphor-react-native";
import { Text, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/theme";

export function CartButton() {
  return (
    <TouchableOpacity>
      <Text>
        <ShoppingCart
          color={THEME.COLORS.YELLOW_DARK}
          size={20}
          weight="fill"
        />
      </Text>
    </TouchableOpacity>
  );
}
