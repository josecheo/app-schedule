import Button from "@/components/Button";
import Select from "@/components/Select";
import Input from "@/components/Input";
import calendarDate from "../../../public/calendar.svg";
import { useState } from "react";
import HandleDoctor from "../HandleDoctor";
import { PATIENT_LIST, CONSULTATION_LIST, HOUR_LIST } from "@/utils/constants";

export default function NewAppointmentForm() {
  const [dateValue, setDateValue] = useState("");
  const [patient, setPatient] = useState("");

  const handleDateChange = (newValue: string) => {
    setDateValue(newValue);
  };

  const handlePatientChange = (newValue: string) => {
    setPatient(newValue);
  };


  return (
    <div className="flex flex-col w-full p-6 h-full gap-5">
      {/* medico */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">Médico</p>
        <HandleDoctor />
      </div>
      {/* Paciente */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">Paciente</p>
        <div className="flex justify-between items-center gap-3 flex-row">
          <div className="basis-1/2">
            <Select listOptions={PATIENT_LIST} />
          </div>
          <Input
            placeholder=""
            value={patient}
            onChange={handlePatientChange}
            icon={""}
            type="text"
          />
          {/* <div className="flex pt-2 pb-2 pr-4 pl-4 items-center border border-solid border-gray/200 h-11 w-full rounded-lg basis-1/1 ">
            <p className="text-base font-medium"></p>
          </div> */}
          <div className="basis-1/4">
            <Button variant="primary" handleClick={() => {}}>
              Buscar
            </Button>
          </div>
        </div>
      </div>
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
