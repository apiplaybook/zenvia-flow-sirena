import express from 'express'
import { sendMessageController } from './UseCases/SendMessage'

// Inicialização do Router do express

const routes = express.Router()

// Declaração da rota /send/message que usaremos na aplicação
routes.post('/send/message', sendMessageController.handle)

export default routes
