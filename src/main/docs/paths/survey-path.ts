export const surveyPath = {
  get: {
    tags: ['Enquete'],
    security: [{
      apiKeyAuth: []
    }],
    summary: 'API para listar todas as enquetes.',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/surveys'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },
      401: {
        $ref: '#/components/unauthorizedError'
      }
    }
  },
  post: {
    tags: ['Enquete'],
    security: [{
      apiKeyAuth: []
    }],
    summary: 'API para criar uma enquete.',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addSurveyParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Sucesso'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      401: {
        $ref: '#/components/unauthorizedError'
      }
    }
  }
}
