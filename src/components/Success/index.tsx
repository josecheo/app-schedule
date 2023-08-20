import { AppointmentData } from "@/utils/type/interface";
import Image from "next/image";
import susscess from "../../../public/succes.svg";
import Button from "@/components/Button";

type SuccessProps = {
  summary: AppointmentData;
  onClose: () => void;
  closeModalBack: (value: boolean) => void;
  clearState: () => void;
};

export default function Success({
  summary,
  onClose,
  closeModalBack,
  clearState,
}: SuccessProps) {

  const handleClose = () => {
    closeModalBack(false);
    clearState();
    // setTimeout(() => {
    //   onClose();
    // }, 1000);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col w-full items-center">
        <Image src={susscess} alt="suscess" />
        <h1 className="text-lg font-semibold mt-1">Se agendó la cita</h1>
      </div>

      <div className="flex flex-col w-full h-full">
        {/* Paciente */}
        <div className="flex flex-col w-full px-6 py-2.5">
          <h3 className="font-medium text-base">Paciente:</h3>
          <p className="font-normal text-sm"> {summary.patient}</p>
        </div>
        {/* Medico */}
        <div className="flex flex-col w-full px-6 py-2.5">
          <h3 className="font-medium text-base">Médico:</h3>
          <p className="font-normal text-sm"> {summary.doctor}</p>
        </div>
        {/* Fecha y hora */}
        <div className="flex flex-col w-full px-6 py-2.5">
          <h3 className="font-medium text-base">{summary.date}</h3>
          <p className="font-normal text-sm"> {summary.hour}</p>
        </div>
        {/* Tipo de Cita */}
        <div className="flex flex-col w-full px-6 py-2.5">
          <h3 className="font-medium text-base">Tipo de Cita</h3>
          <p className="font-normal text-sm"> {summary.appointmentType}</p>
        </div>
      </div>

      <div className="p-3">
        <Button variant="secondary" handleClick={handleClose} wFull>
          Cerrar
        </Button>
      </div>
    </div>
  );
}
