import { SurveyResultModel } from '@/domain/models/survey-result'

export interface SaveSurveyResultModel extends Omit<SurveyResultModel, 'id'> {}

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultModel) => Promise<SurveyResultModel>
}
