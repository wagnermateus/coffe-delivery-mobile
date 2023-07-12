import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  });

  return (
    <>
      <StatusBar style="auto" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </>
  );
}
