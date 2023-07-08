export const surveyResultSchema = {
  type: 'object',
  properties: {
    question: {
      type: 'string'
    },
    answer: {
      type: 'array',
      items: {
        $ref: '#/schemas/surveyResultAnswer'
      }
    },
    surveyId: {
      type: 'string'
    },
    date: {
      type: 'string'
    }
  },
  required: ['question', 'answer', 'surveyId', 'date']
}
