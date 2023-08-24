import { ListOptions } from "@/utils/type/interface";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};

const getListHour = () => {
  let HOUR = [] as ListOptions[];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = String(hour).padStart(2, "0");
      const formattedMinute = String(minute).padStart(2, "0");
      HOUR.push({
        display: `${formattedHour}:${formattedMinute}`,
        code: `${formattedHour}:${formattedMinute}`,
      });
    }
  }
  return HOUR;
};

export const PATIENT_LIST = [
  {
    code: "Nombre",
    display: "Nombre",
  },
];

export const CONSULTATION_LIST = [
  {
    code: "remote-consultation",
    display: "Remote Consultation",
  },
  {
    code: "local-consultation",
    display: "Local Consultation",
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
  const ampm = horas >= 12 ? "PM" : "AM";
  const hora12Hrs = horas % 12 === 0 ? 12 : horas % 12;

  return `${hora12Hrs}:${minutos.toString().padStart(2, "0")} ${ampm}`;
}

export function converDate(fechaCompleta: string | number | Date) {
  const fecha = new Date(fechaCompleta);
  const anio = fecha.getFullYear();
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const dia = fecha.getDate().toString().padStart(2, "0");

  return `${anio}-${mes}-${dia}`;
}

export function converDateUTC(fecha: string, hora: string) {
  const [dia, mes, anio] = fecha.split("/");
  const [horas, minutos] = hora.split(":");

  const fechaISO = new Date(
    Date.UTC(
      Number(anio),
      Number(mes) - 1,
      Number(dia),
      Number(horas),
      Number(minutos)
    )
  );

  return fechaISO.toISOString();
}

export function add30Min(fechaISO: string | number | Date) {
  const fechaOriginal = new Date(fechaISO);
  const nuevaFecha = new Date(fechaOriginal.getTime() + 30 * 60000); // Agregar 30 minutos en milisegundos

  return nuevaFecha.toISOString();
}

export function formatDate(fechaISO: string | number | Date, type: string) {
  if (type === "date") {
    const date = new Date(fechaISO).toLocaleDateString("es", options as any);
    const dateSplit = date.split(",");
    return dateSplit[0];
  }
 
}
