import { api } from '../../config/api'
import { config } from 'dotenv'
import { ISendMessageRequestDTO } from './SendMessageDTO'
import { getProspectIdUseCase } from '../GetProspectId'
import { createLeadUseCase } from '../CreateLead'

// Iniciização do dotenv
config()

export class SendMessageUseCase {
	async execute(data: ISendMessageRequestDTO) {
		// Cria o Lead
		await createLeadUseCase.execute(data)

		// Pega o ID do Prospect
		const prospectId = await getProspectIdUseCase.execute(data.tel)

		// Envia a mensagem
		api.post(
			`/prospect/${prospectId}/messaging/whatsapp/notification?api-key=${process.env.API_TOKEN}`,
			{
				key: 'bfd5a62e-d720-4d8b-b282-54225cde1cc5',
			}
		)
	}
}
