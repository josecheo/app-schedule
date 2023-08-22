import { gql } from '@apollo/client';


export const GET_APPOINTMENT_BY_DATE_DOCTOR = gql`
query GetAppointmentByDoctorDate($doctorId: String!, $date: String!) {
  getAppointmentByDoctorDate(doctorId: $doctorId, date: $date) {
    id
    start
    end
    patient {
      id
      birthDate
      gender
      name
    }
    doctor {
      id
      name
      gender
      specialty
    }
    serviceType
  }
}
`;

export const GET_PATIENT_BY_NAME = gql`
query GetPatientByName($name: String) {
  getPatientByName(name: $name) {
    id
    birthDate
    gender
    name
  }
}
`;

export const GET_PRACTITIONER_BY_NAME = gql`
query GetPractitionerByName($name: String) {
    getPractitionerByName(name: $name) {
    id
    name
    gender
    specialty
  }
}
`;


