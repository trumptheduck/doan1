import { Request, Response } from 'express';
// const Product = require('../config')
import Patient from '../models/patient.model'

class PatientController {
  getAllPatients = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ msg: 'all patients' });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  getPatient = async (req: Request, res: Response) => {
    try {
      let patients = await Patient.find();
      return res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({message: "error"})
      console.log(error)
    }
  };

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

  postPatient = async (req: Request, res: Response) => {
    try {
      const _product = new Patient({
        id : req.body.id,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        link: req.body.link,
        image: req.body.image,
      })
      const newProduct = await _product.save()
      console.log("Create new Post:", newProduct._id)
      return res.status(200).json(newProduct)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: "error"})
    }
  }

  editPatient = async (req: Request, res: Response) => {
    try {
      const body = req.body
      await Patient.findByIdAndUpdate(body._id, body)
      const updatedProduct = await Patient.findById(body._id)
      console.log("UpdateProduct: ", body._id)
      return res.status(200).json(updatedProduct)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: "error"})
    }
  }

  deletePatient = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const deleteProduct = await Patient.findByIdAndDelete(id)
      console.log("Deleted Product: ", id)
      return res.status(200).json(deleteProduct)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: "error"})
    }
  }
}

export default PatientController;
