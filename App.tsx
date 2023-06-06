import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { homeScreenStyles } from './src/styles/home.style'
import HomeScreen from './src/functional_components/Home'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import  QuestionScreen from './src/functional_components/Question';

const Stack = createNativeStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Personality Test',
          headerTitleStyle: homeScreenStyles.headerTitle,
          headerStyle: homeScreenStyles.headerStyle,
        }}
      />
      <Stack.Screen
        name="question"
        component={QuestionScreen}
        options={{
          headerShown: true,
          title: 'Question',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

const App = () => {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Routes />
    </PaperProvider>
  )
}
export default App
