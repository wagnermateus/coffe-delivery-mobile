import { ArrowLeft } from "phosphor-react-native";
import { THEME } from "../../styles/theme";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type GoBackButtonProps = {
  type: "primary" | "secondary";
};
export function GoBackButton({ type = "primary" }: GoBackButtonProps) {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <TouchableOpacity onPress={handleGoBack}>
      <ArrowLeft
        color={type === "primary" ? THEME.COLORS.WHITE : THEME.COLORS.GREY_100}
        size={THEME.FONT_SIZE.LG}
      />
    </TouchableOpacity>
  );
}
