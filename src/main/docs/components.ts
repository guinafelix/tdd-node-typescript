import {
  serverError,
  badRequest,
  unauthorizedError,
  notFound,
  forbidden
} from './components/'
import { apiKeyAuthSchema } from './schemas/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorizedError,
  serverError,
  notFound,
  forbidden
}
