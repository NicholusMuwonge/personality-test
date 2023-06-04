import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { homeScreenStyles } from "./src/styles/home.style";
import HomeScreen from "./src/Home";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Personality Test",
            headerTitleStyle: homeScreenStyles.headerTitle,
            headerStyle: homeScreenStyles.headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
