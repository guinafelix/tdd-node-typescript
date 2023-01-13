import { LogErrorRepository } from '../../data/protocols/log-error-repository'
import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller
  private readonly logErrorRepository: LogErrorRepository

  constructor (
    controller: Controller,
    logErrorRepository: LogErrorRepository
  ) {
    this.controller = controller
    this.logErrorRepository = logErrorRepository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResposne = await this.controller.handle(httpRequest)
    if (httpResposne.statusCode === 500) {
      await this.logErrorRepository.log(httpResposne.body.stack)
    }
    return httpResposne
  }
}
