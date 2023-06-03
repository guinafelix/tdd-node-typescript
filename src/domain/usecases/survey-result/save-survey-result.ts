import { SurveyResultModel } from '@/domain/models/survey-result'

export interface SaveSurveyResultParams extends Omit<SurveyResultModel, 'id'> {}

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultParams) => Promise<SurveyResultModel>
}
