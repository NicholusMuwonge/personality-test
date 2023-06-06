import { StyleSheet } from 'react-native'
import { homeScreenStyles } from './home.style'

export const questionScreenStyles = StyleSheet.create({
  container: {
    ...homeScreenStyles.container,
    backgroundColor: '#fff',
    padding: 2,
  },
  nextButtonStyle: {
    backgroundColor: '#617bf4',
  },
  buttonGroupStyle: { marginBottom: 20, width: '90%' }
})
