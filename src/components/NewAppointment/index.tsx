import Button from "@/components/Button";
import NewAppointmentForm from "@/components/NewAppointmentForm";
import { useState } from "react";

const INITIAL_DATA = {
  patient: "",
  doctor: "",
  date: "",
  appointmentType: "",
};

export default function NewAppointment({ onClose }: { onClose: () => void }) {
  const [appointmentData, setAppointmentData] = useState(INITIAL_DATA);

  console.log("appointmentData",appointmentData)
  return (
    <div className="flex flex-col justify-between w-full border border-solid border-gray/200 shadow-sm basis-1/2">
      <div>
        <div className="w-full h-2 bg-primary/700" />
        <div className=" h-20 p-6 border-b border-solid border-gray/200">
          <h1 className="text-lg font-semibold">Nueva cita</h1>
        </div>
      </div>
      <NewAppointmentForm setAppointmentData={setAppointmentData} />
      <div>
        <div className=" flex justify-between h-20 p-6 border-t border-solid border-gray/200">
          <Button variant="danger" handleClick={onClose}>
            Cancelar
          </Button>
          <Button variant="secondary" handleClick={onClose}>
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
}
