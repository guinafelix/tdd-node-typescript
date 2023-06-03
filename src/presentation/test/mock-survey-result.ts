import { SaveSurveyResult, SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyByIdStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await new Promise(resolve => { resolve(mockSurveyResultModel()) })
    }
  }
  return new SaveSurveyByIdStub()
}
