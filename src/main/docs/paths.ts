import {
  loginPath,
  surveyPath,
  signupPath,
  surveyResultPath
} from './paths/'

export default {
  '/login': loginPath,
  '/surveys': surveyPath,
  'survey/{surveyId}/results': surveyResultPath,
  '/signup': signupPath
}
