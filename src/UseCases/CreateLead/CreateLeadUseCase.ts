import { config } from 'dotenv'
import { api } from './../../config/api'
import { ISendMessageRequestDTO } from './../SendMessage/SendMessageDTO'

// Inicialização do dotenv
config()

export class CreateLeadUseCase {
	async execute(data: ISendMessageRequestDTO) {
		api.post(`/lead/retail?api-key=${process.env.API_TOKEN}`, {
			priority: 0,
			provider: 'Web Chat Zenvia Flow',
			providerLeadId: '0',
			utmSource: 'Web Chat Zenvia Flow',
			firstName: data.firstName,
			lastName: data.lastName,
			phones: [data.tel],
			comments: data.comments,
		})
	}
}
