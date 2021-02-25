import { CreateLeadUseCase } from './CreateLeadUseCase'
import { CreateLeadController } from './CreateLeadController'

const createLeadUseCase = new CreateLeadUseCase()

const createLeadController = new CreateLeadController()

export { createLeadUseCase, createLeadController }
