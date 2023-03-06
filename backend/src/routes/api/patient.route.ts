import { Router } from 'express';
import PatientController from '../../controllers/patient.controller';
class PatientRoute {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    const _patientController = new PatientController(); 
    this.router.get('/', _patientController.getPatients);
    this.router.get('/:id', _patientController.getPatientById);
    this.router.post('/', _patientController.createPatient);
    this.router.patch('/', _patientController.editPatient);
    this.router.delete('/:id', _patientController.deletePatient);
    this.router.get('/doctor/:id', _patientController.getPatientByDoctorId);
  }
}

export default PatientRoute;
