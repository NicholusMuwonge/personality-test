type AnswerOption = {
  objective: string
  type: 'introvert' | 'extrovert' | 'neutral'
  score?: number
  id: string
}

export type QuestionType = {
  question: string
  answer_options: AnswerOption[]
  id: number
}

export const backendQuestionsMock: QuestionType[] = [
  {
    id: 0,
    question:
      'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    answer_options: [
      { objective: 'Very true', type: 'introvert', score: -1, id: 'a' },
      { objective: 'Somewhat true', type: 'extrovert', score: 1, id: 'b' },
      { objective: 'Not true at all', type: 'extrovert', score: 1, id: 'c' },
    ],
  },
  {
    id: 1,
    question: 'You are taking part in a guided tour of a museum. You:',
    answer_options: [
      {
        objective: 'Follow the group without question',
        type: 'introvert',
        score: -1,
        id: 'a',
      },
      {
        objective: 'Make sure that everyone is able to hear properly',
        type: 'extrovert',
        score: 1,
        id: 'b',
      },
      {
        objective:
          'Are right up the front, adding your own comments in a loud voice',
        type: 'extrovert',
        score: 1,
        id: 'c',
      },
      {
        objective:
          'Are a bit too far towards the back so don’t really hear what the guide is saying',
        type: 'extrovert',
        score: 1,
        id: 'd',
      },
    ],
  },
  {
    id: 1,
    question: 'You are taking part in a guided tour of a museum. You:',
    answer_options: [
      {
        objective: 'Follow the group without question',
        type: 'introvert',
        score: -1,
        id: 'a',
      },
      {
        objective: 'Make sure that everyone is able to hear properly',
        type: 'extrovert',
        score: 1,
        id: 'b',
      },
      {
        objective:
          'Are right up the front, adding your own comments in a loud voice',
        type: 'extrovert',
        score: 1,
        id: 'c',
      },
      {
        objective:
          'Are a bit too far towards the back so don’t really hear what the guide is saying',
        type: 'extrovert',
        score: 1,
        id: 'd',
      },
    ],
  },
]
