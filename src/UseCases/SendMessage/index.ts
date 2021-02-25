import { SendMessageUseCase } from './SendMessageUseCase'
import { SendMessageController } from './SendMessageController'

const sendMessageUseCase = new SendMessageUseCase()

const sendMessageController = new SendMessageController()

export { sendMessageUseCase, sendMessageController }
