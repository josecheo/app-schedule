import { ListOptions } from "@/utils/type/interface";


const getListHour = ()=> {
  let HOUR = [] as ListOptions[];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = String(hour).padStart(2, '0');
      const formattedMinute = String(minute).padStart(2, '0');
      HOUR.push({ name: `${formattedHour}:${formattedMinute}`, value: `${formattedHour}:${formattedMinute}` });
    }
  }
  return HOUR;
};

export const PATIENT_LIST = [
  {
    name: "Nombre",
    value: "Nombre",
  },
];

export const CONSULTATION_LIST = [
  {
    name: "Consulta Presencial",
    value: "CP",
  },
  {
    name: "Consulta Virtual",
    value: "CV",
  },
];

export const HOUR_LIST: ListOptions[] = getListHour();

