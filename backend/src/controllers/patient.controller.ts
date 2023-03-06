import { Request, Response } from 'express';
// const Patient = require('../config')
import Patient from '../models/patient.model'

class PatientController {
  getPatients = async (req: Request, res: Response) => {
    try {
        let patients = await Patient.find();
        return res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({message: "error"})
      console.log(error)
    }
  };

  getPatientById = async (req, res) => {
    try {
        let patients = await Patient.findById(req.params.id);
        return res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({message: "error"})
      console.log(error)
    }
  }

  getPatientByDoctorId = async (req: Request, res: Response) => {
    try {
      let docId = req.params.id
      let patients = await Patient.find({ doctor: docId });
      res.status(200).json(patients)
    } catch (error) {
      res.status(500).json({message: "error"})
      console.log(error)
    }
  }

  createPatient = async (req: Request, res: Response) => {
    try {
      const _patient = new Patient({
        id: req.body.id,
        doctor: req.body.doctor,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: new Date(req.body.birthday),
        address: req.body.address,
        phone: req.body.phone,
        identification: req.body.identification,
      })
      const newPatient = await _patient.save()
      console.log("Create new Post:", newPatient._id)
      return res.status(200).json(newPatient)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: "error"})
    }
  }

  editPatient = async (req: Request, res: Response) => {
    try {
      const body = req.body
      await Patient.findByIdAndUpdate(body._id, body)
      const updatedPatient = await Patient.findById(body._id)
      console.log("UpdatePatient: ", body._id)
      return res.status(200).json(updatedPatient)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: "error"})
    }
  }

  deletePatient = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const deletePatient = await Patient.findByIdAndDelete(id)
      console.log("Deleted Patient: ", id)
      return res.status(200).json(deletePatient)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: "error"})
    }
  }
}

export default PatientController;
