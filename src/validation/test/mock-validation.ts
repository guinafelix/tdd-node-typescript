import { Validation } from '@/presentation/protocols'

export const mockValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error | undefined {
      return null as any
    }
  }
  return new ValidationStub()
}
