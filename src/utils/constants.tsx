import { ListOptions } from "@/utils/type/interface";

const getListHour = () => {
  let HOUR = [] as ListOptions[];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = String(hour).padStart(2, "0");
      const formattedMinute = String(minute).padStart(2, "0");
      HOUR.push({
        name: `${formattedHour}:${formattedMinute}`,
        value: `${formattedHour}:${formattedMinute}`,
      });
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

export function calcularEdad(fechaNacimiento: string) {
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const fechaActual = new Date();

  const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();

  if (
    fechaActual.getMonth() < fechaNacimientoDate.getMonth() ||
    (fechaActual.getMonth() === fechaNacimientoDate.getMonth() &&
      fechaActual.getDate() < fechaNacimientoDate.getDate())
  ) {
    // Restar un año si el cumpleaños aún no ha ocurrido este año
    return edad - 1;
  } else {
    return edad;
  }
}

export function getHourByDate(dateFull: string) {
  const horaPart = dateFull.split(", ")[1].split(":");
  const horas = parseInt(horaPart[0]);
  const minutos = parseInt(horaPart[1]);
  const ampm = horas >= 12 ? 'PM' : 'AM';
  const hora12Hrs = horas % 12 === 0 ? 12 : horas % 12;

  return `${hora12Hrs}:${minutos.toString().padStart(2, '0')} ${ampm}`;
}

export function converDate(fechaCompleta: string | number | Date) {
  const fecha = new Date(fechaCompleta);
  const anio = fecha.getFullYear();
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const dia = fecha.getDate().toString().padStart(2, '0');

  return `${anio}-${mes}-${dia}`;
}