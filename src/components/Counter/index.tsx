import { Minus, Plus } from "phosphor-react-native";
import { TouchableOpacity, Text, View } from "react-native";
import { THEME } from "../../styles/theme";
import { Styles } from "./styles";

export function Counter() {
  return (
    <View style={Styles.Container}>
      <TouchableOpacity>
        <Text>
          <Minus weight="bold" color={THEME.COLORS.PURPLE} size={20} />
        </Text>
      </TouchableOpacity>
      <Text style={Styles.CounterValue}>1</Text>
      <TouchableOpacity>
        <Text>
          <Plus weight="bold" color={THEME.COLORS.PURPLE} size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
