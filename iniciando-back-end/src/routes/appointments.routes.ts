import { Router, request, response } from 'express';
import { parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentsRepository';
import { getCustomRepository } from 'typeorm';

import CreateAppointmentService from '../services/CreateAppointmentService';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  console.log(request.user);
  const appointmentRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentRepository.find();
  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const  { provider_id, date} = request.body;
  const parsedDate = parseISO(date);
  const createAppointment = new CreateAppointmentService();
  const appointment = await createAppointment.execute({provider_id, date: parsedDate});

  return response.json(appointment);

})

export default appointmentsRouter;

