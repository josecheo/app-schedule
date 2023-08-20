import Button from "@/components/Button";
import Select from "@/components/Select";
import Input from "@/components/Input";
import calendarDate from "../../../public/calendar.svg";
import { useState } from "react";
import HandleDoctor from "../HandleDoctor";
import { CONSULTATION_LIST, HOUR_LIST } from "@/utils/constants";
import HandlePatient from "@/components/HandlePatient";

export default function NewAppointmentForm({
  setAppointmentData,
}: {
  setAppointmentData: (data: any) => void;
}) {
  const [dateValue, setDateValue] = useState("");

  const handleDateChange = (newValue: string) => {
    setDateValue(newValue);
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
      <HandlePatient />
      {/* Tipo de atención */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">
          Tipo de atención
        </p>
        <Select listOptions={CONSULTATION_LIST} />
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
          <Select listOptions={HOUR_LIST} />
        </div>
      </div>
    </div>
  );
}
