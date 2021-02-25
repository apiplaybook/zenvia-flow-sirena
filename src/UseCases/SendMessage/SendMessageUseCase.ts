import { api } from '../../config/api'
import { ISendMessageRequestDTO } from './SendMessageDTO'
import { config } from 'dotenv'
import { getProspectIdUseCase } from '../GetProspectId'
import { createLeadUseCase } from '../CreateLead'

config()

export class SendMessageUseCase {
	async execute(data: ISendMessageRequestDTO) {
		await createLeadUseCase.execute(data)

		const prospectId = await getProspectIdUseCase.execute(data.tel)

		api.post(
			`/prospect/${prospectId}/messaging/whatsapp/notification?api-key=${process.env.API_TOKEN}`,
			{
				key: 'bfd5a62e-d720-4d8b-b282-54225cde1cc5',
			}
		)
	}
}
