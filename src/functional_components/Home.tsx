import React from 'react'
import { View, Text, Image } from 'react-native'
import { homeScreenStyles } from '../styles/home.style'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const StartButton = ({navigate}) => {
  const navigation = useNavigation();
  return (
    <Button
      uppercase
      buttonColor="#fff"
      textColor="#000"
      icon="arrow-right"
      style={{ marginTop: '10%' }}
      contentStyle={{ flexDirection: 'row-reverse', padding: 5 }}
      mode="contained"
      onPress={() => navigation.navigate("question")}
    >
      Take Personality Test
    </Button>
  )
}
const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <Text
        style={homeScreenStyles.appName}
      >
        Personality Test
      </Text>
      <Image
        source={require('../../assets/home_illustration.png')}
        style={{
          height:"50%",
          width:"80%"
        }}
      />
      <StartButton />
    </View>
  )
}

export default HomeScreen
