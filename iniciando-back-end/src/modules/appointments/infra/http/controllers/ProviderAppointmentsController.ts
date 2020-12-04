import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentService from '@modules/appointments/services/ListProviderAppointmentService';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const listAppointment = container.resolve(ListProviderAppointmentService);
    const appointment = await listAppointment.execute({
      provider_id,
      year,
      month,
      day,
    });

    return response.json(appointment);
  }
}
