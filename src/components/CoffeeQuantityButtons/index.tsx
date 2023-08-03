import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Styles } from "./styles";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { THEME } from "../../styles/theme";
import { useEffect } from "react";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

type CoffeeQuantityButton = TouchableOpacityProps & {
  title: "114ml" | "140ml" | "227ml";
  isChecked: boolean;
};

export function CoffeeQuantityButton({
  title,
  isChecked = false,
  ...rest
}: CoffeeQuantityButton) {
  const checked = useSharedValue(1);
  const scale = useSharedValue(1);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.GREY_700, THEME.COLORS.WHITE]
      ),
      borderWidth: checked.value,
      borderColor: interpolateColor(
        checked.value,
        [0, 1],
        ["transparent", THEME.COLORS.PURPLE]
      ),
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.GREY_300, THEME.COLORS.PURPLE]
      ),
    };
  });
  useEffect(() => {
    checked.value = withTiming(isChecked ? 1 : 0);
    scale.value = withTiming(isChecked ? 1.1 : 1);
  }, [isChecked]);
  return (
    <AnimatedTouchableOpacity
      style={[animatedContainerStyle, Styles.Container]}
      activeOpacity={0.7}
      {...rest}
    >
      <Animated.Text style={[animatedTextStyle, Styles.ButtonTitle]}>
        {title}
      </Animated.Text>
    </AnimatedTouchableOpacity>
  );
}
