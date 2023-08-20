export interface Doctor {
  name: string;
  specialty: string;
  image: string;
}
export interface Patient {
  name: string;
  image: string;
  typeDocument: string;
  document: string;
}


export interface ListOptions {
  name: string;
  value: string;
}

export interface AppointmentData {
  patient: string;
  doctor: string;
  date: string;
  appointmentType: string;
  hour: string;
}
