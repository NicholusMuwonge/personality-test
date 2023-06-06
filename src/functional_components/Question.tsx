import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { questionScreenStyles } from '../styles/questions.style'
import { Divider, RadioButton, SegmentedButtons } from 'react-native-paper'
import { QuestionType, backendQuestionsMock } from '../services/backend'
import { useNavigation } from '@react-navigation/native'

const Question = ({
  questionAndObjectives,
}: {
  questionAndObjectives: QuestionType
}) => {
  const [checked, setChecked] = React.useState('')

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text style={{ fontWeight: '500', fontSize: 18, padding: 5 }}>
        {questionAndObjectives?.question}
      </Text>
      <RadioButton.Group
        onValueChange={(value) => setChecked(value)}
        value={checked}
      >
        <Divider style={{ padding: 2 }} />
        {questionAndObjectives?.answer_options.map((qn, index) => (
          <View key={index}>
            <RadioButton.Item
              label={qn?.id?.toLocaleUpperCase() + '. ' + qn.objective}
              value={qn?.id}
            />
            <Divider style={{ width: '94%', alignSelf: 'center' }} />
          </View>
        ))}
      </RadioButton.Group>
    </View>
  )
}

const QuestionScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [value, setValue] = React.useState('')
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title:
        'Question ' + (currentQuestionIndex + 1) + ' / ' + questions?.length,
    })
  }, [currentQuestionIndex, questions])

  useEffect(() => {
    ;(() => setQuestions(backendQuestionsMock))()
  }, [])
  return (
    <View style={questionScreenStyles.container}>
      <Question questionAndObjectives={questions[currentQuestionIndex]} />
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'previous',
            label: 'Previous',
            icon: 'arrow-left',
            disabled: !currentQuestionIndex,
            onPress: () =>
              setCurrentQuestionIndex((currIndex) =>
                currIndex > 0 ? currIndex - 1 : currIndex,
              ),
          },
          {
            value: 'next',
            label: 'Next',
            icon: 'arrow-right',
            disabled: currentQuestionIndex === questions.length - 1,
            uncheckedColor: '#fff',
            checkedColor: '#fff',
            onPress: () =>
              setCurrentQuestionIndex((currIndex) => currIndex + 1),
            style: questionScreenStyles.nextButtonStyle,
          },
        ]}
        style={questionScreenStyles.buttonGroupStyle}
      />
    </View>
  )
}

export default QuestionScreen
