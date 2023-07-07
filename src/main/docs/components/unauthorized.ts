export const unauthorizedError = {
  description: 'Crenciais inválidas.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
