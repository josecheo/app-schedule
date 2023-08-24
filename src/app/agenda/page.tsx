"use client";
import Button from "@/components/Button";
import HandleDoctor from "@/components/HandleDoctor";
import DatePickerComponent from "@/components/DatePickerComponent";
import { useQuery } from "@apollo/client";
import { AppointmentData } from "@/utils/type/interface";
import { GET_APPOINTMENT_BY_DATE_DOCTOR } from "@/graphql/queries";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Image from "next/image";
import no_user_img from "../../../public/no_user_img.png";
import { calcularEdad, getHourByDate, converDate } from "@/utils/constants";
import clock from "../../../public/clock.svg";
import calendar from "../../../public/calendar.svg";

export default function Scheduler() {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState(new Date());
  let appointment: AppointmentData[] = [];
  const { loading, error, data, refetch } = useQuery(
    GET_APPOINTMENT_BY_DATE_DOCTOR,
    {
      variables: {
        doctorId,
        date: converDate(date),
      },
    }
  );

  useEffect(() => {
    if (doctorId) {
      refetch();
    }
  }, [doctorId, refetch]);

  if (!loading) {
    const { getAppointmentByDoctorDate } = data || {};
    appointment = getAppointmentByDoctorDate;
  }

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  return (
    <div className="flex flex-col w-full mt-8 min-h-48 rounded-lg border border-solid border-gray/200 shadow-sm">
      <div className="flex flex-wrap gap-3 justify-between  p-4 border-b border-solid border-gray/200">
        <div className="flex gap-2 items-center">
          <Button variant="primary" handleClick={() => setDate(new Date())}>
            Hoy
          </Button>
          <div className="w-px h-6 bg-gray/200" />
          <DatePickerComponent
            currentDate={date}
            handleDateChange={handleDateChange}
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-base font-medium "> Agenda del médico:</p>
          <HandleDoctor setDoctorId={setDoctorId} />
        </div>
      </div>
      {error ? (
        <div className="flex flex-col items-center p-5 justify-center w-full h-full">
          <h3 className="text-base font-semibold	 text-gray/900">
            {error.message}
          </h3>
        </div>
      ) : loading ? (
        <div className="flex flex-col items-center p-5 justify-center w-full h-full">
          <Loading />
        </div>
      ) : appointment?.length > 0 ? (
        <div className="flex flex-col items-center p-5 justify-center w-full h-full">
          {appointment.map((item: AppointmentData) => (
            <div
              className="flex w-full h-24 p-2 justify-between items-center gap-4 border-b border-solid border-gray/200"
              key={item.id}
            >
              <Image
                src={item.patient.image || no_user_img}
                alt="paciente"
                width={40}
                height={40}
              />
              <div className="flex flex-col w-full h-full justify-center">
                <h3 className="text-sm font-medium">{item.patient.name}</h3>
                <div className="flex gap-1">
                  <p className="font-normal text-xs">[{item.patient.gender}]</p>
                  <p className="font-normal text-xs">-</p>
                  <p className="font-normal text-xs">
                    [{calcularEdad(item.patient.birthDate || "")}]
                  </p>
                </div>

                <div className="flex gap-1 mt-2 items-center">
                  <Image src={clock} alt="clock" />
                  <p className="font-normal text-xs">
                    [{getHourByDate(item.start)}]
                  </p>
                  <p className="font-normal text-xs">-</p>
                  <p className="font-normal text-xs">
                    [{getHourByDate(item.end)}]
                  </p>
                  <p className="font-normal text-xs text-gray/300">|</p>
                  <div className="rounded-lg bg-gray/200 px-2 py-1 flex gap-1">
                    <Image
                      src={calendar}
                      alt="calendario"
                      width={9}
                      height={10}
                    />
                    <p className="text-xs font-medium	">{item.serviceType}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <Button variant="primary" handleClick={() => {}}>
                  Editar
                </Button>
                <Button variant="delete" handleClick={() => {}}>
                  Eliminar
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center p-5 justify-center w-full h-full">
          <h3 className="text-base font-semibold	 text-gray/900">
            No se encontraron registros
          </h3>
          <p className=" text-sm font-normal text-gray/600 max-w-xs text-center mt-1">
            El médico seleccionado no tiene ninguna cita el día de hoy.
          </p>
        </div>
      )}
    </div>
  );
}
