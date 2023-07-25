import { ShoppingCart } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../styles/theme";
import { Styles } from "./styles";

type CartButtomProps = {
  isEmpty: boolean;
};

export function CartButton({ isEmpty }: CartButtomProps) {
  return (
    <TouchableOpacity>
      <View style={Styles.CounterBall}>
        <Text style={Styles.Counter}>3</Text>
      </View>
      <Text>
        <ShoppingCart
          color={isEmpty ? THEME.COLORS.YELLOW_DARK : THEME.COLORS.PURPLE}
          size={20}
          weight="fill"
        />
      </Text>
    </TouchableOpacity>
  );
}
