import Select from "@/components/Select";
import Input from "@/components/Input";
import calendarDate from "../../../public/calendar.svg";
import { useEffect, useState } from "react";
import HandleDoctor from "../HandleDoctor";
import { CONSULTATION_LIST, HOUR_LIST } from "@/utils/constants";
import HandlePatient from "@/components/HandlePatient";
import { AppointmentData } from "@/utils/type/interface";
import { converDateUTC, add30Min } from "@/utils/constants";

export default function NewAppointmentForm({
  setAppointmentData,
}: {
  setAppointmentData: React.Dispatch<React.SetStateAction<AppointmentData>>;
}) {
  const [dateValue, setDateValue] = useState("");
  const [hourValue, setHourValue] = useState("");

  useEffect(() => {
    if (dateValue && hourValue) {
      const date = converDateUTC(dateValue, hourValue);
      setAppointmentData((prev: AppointmentData) => ({
        ...prev,
        start: date,
        end: add30Min(date),
      }));
    }
  }, [dateValue, hourValue, setAppointmentData]);


  const handleConsultationType = (newValue: string) => {
    setAppointmentData((prev: AppointmentData) => ({
      ...prev,
      appointmentType: newValue,
    }));
  };

  const handleDateChange = (newValue: string) => {
    setDateValue(newValue);
  };

  const handleHourChange = (newValue: string) => {
    setHourValue(newValue);
  };

  return (
    <div className="flex flex-col w-full p-6 h-full gap-5">
      {/* medico */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">Médico</p>
        {setAppointmentData && (
          <HandleDoctor setAppointmentData={setAppointmentData} />
        )}
      </div>
      {/* Paciente */}
      {setAppointmentData && (
        <HandlePatient setAppointmentData={setAppointmentData} />
      )}
      {/* Tipo de atención */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">
          Tipo de atención
        </p>
        <Select
          listOptions={CONSULTATION_LIST}
          onChange={handleConsultationType}
        />
      </div>
      {/* Fecha y Hora */}
      <div className="flex w-full justify-between gap-5">
        <div className="flex flex-col w-full">
          <p className="text-sm font-medium text-gray/700 mb-2">Fecha</p>
          <Input
            placeholder="dd/mm/aaaa"
            icon={calendarDate}
            value={dateValue}
            onChange={handleDateChange}
            type="text"
            validateInput="date"
          />
        </div>

        <div className="flex flex-col w-full">
          <p className="text-sm font-medium text-gray/700 mb-2">Hora</p>
          <Select listOptions={HOUR_LIST} onChange={handleHourChange} />
        </div>
      </div>
    </div>
  );
}
