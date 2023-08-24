import Button from "@/components/Button";
import NewAppointmentForm from "@/components/NewAppointmentForm";
import { useState } from "react";
import Modal from "@/components/Modal";
import Success from "@/components/Success";
import { AppointmentData } from "@/utils/type/interface";

const INITIAL_STATE = {
  id: "",
  start: "",
  end: "",
  patient: {
    id: "",
    birthDate: "",
    gender: "",
    name: "",
    image: "",
  },
  doctor: {
    id: "",
    name: "",
    gender: "",
    specialty: "",
    image: "",
  },
  serviceType: "remote-consultation",
};

export default function NewAppointment({ onClose }: { onClose: () => void }) {
  const [appointmentData, setAppointmentData] =
    useState<AppointmentData>(INITIAL_STATE);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clearState = () => {
    setAppointmentData(INITIAL_STATE);
  };
  const openModal = () => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <Button variant="secondary" handleClick={openModal}>
            Confirmar
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Selecciona un médico"
          type="success"
        >
          <Success
            summary={appointmentData}
            onClose={closeModal}
            closeModalBack={onClose}
            clearState={clearState}
          />
        </Modal>
      )}
    </div>
  );
}
