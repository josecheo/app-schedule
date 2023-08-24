export interface Doctor {
  id: string;
  name: string;
  gender: string;
  specialty?: string;
  image: string;
}
export interface Patient {
  id: string;
  birthDate?: string;
  gender: string;
  name: string;
  image: string;
}

export interface ListOptions {
  code: string;
  display: string;
}

export interface FormatDate {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  timeZoneName: string;
}
export interface AppointmentData {
  id: string;
  start: string;
  end: string;
  patient: Patient;
  doctor: Doctor;
  serviceType: string;
  date?: string;
  hour?: string;
}
