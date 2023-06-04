import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { homeScreenStyles } from "./styles/home.style";

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <StatusBar style="auto" />
      <Text>Personlity Test App.</Text>
    </View>
  );
};

export default HomeScreen;
