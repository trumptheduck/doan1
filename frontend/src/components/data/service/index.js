import axios from 'axios';
import { Environment } from '../env/env';
export class Service {
  getPatient() {
    try {
      return axios
        .get(Environment.apiUrl + '/api/patients/')
        .then((res) => res.data);
    } catch (error) {
      console.error(error);
    }
  }
  getPatientsByDoctorId() {
    try {
      return axios
        .get(Environment.apiUrl + '/api/patients/doctor/:id')
        .then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  }
  // getProductById(id) {
  //     try {
  //         return axios.get('http://localhost:4000/api/product/')
  //         .then(res => res.data)
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }
  createPatient(data) {
    try {
      return axios
        .post(Environment.apiUrl + '/api/patients/', data)
        .then((res) => res.data);
    } catch (error) {
      console.error(error);
    }
  }
  editPatient(data) {
    try {
      return axios
        .patch(Environment.apiUrl + '/api/patients/', data)
        .then((res) => res.data);
    } catch (error) {
      console.error(error);
    }
  }
  deletePatient(id) {
    try {
      return axios
        .delete(Environment.apiUrl + '/api/patients/' + id)
        .then((res) => res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async login(email, password) {
    try {
      return await axios.post(Environment.apiUrl + '/api/auth/login', {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  userLogin(data) {
    try {
      return axios
        .get(Environment.apiUrl + 'api/auth/login', data)
        .then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  }
}
