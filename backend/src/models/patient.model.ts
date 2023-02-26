import * as mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }, 
    birthday: {
        type: Date
    },
    address: {
        type: String
    }, 
    phone: {
        type: Number
    }, 
    identification: {
        type: Number
    },
}, {
    collection: "patients"
});

const Patient = mongoose.model('Patient', PatientSchema);
export default Patient;