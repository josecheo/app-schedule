"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import no_user_img from "../../../public/no_user_img.png";
import Button from "@/components/Button";
import open from "../../../public/open.svg";
import ListToSearch from "@/components/ListToSearch";
import Modal from "@/components/Modal";
import { Doctor, AppointmentData } from "@/utils/type/interface";

const DEFATUL_MEDIC = {
  id: "",
  name: "",
  gender: "",
  specialty: "",
  image: "",
};

export default function HandleDoctor({
  setAppointmentData,
  setDoctorId,
}: {
  setAppointmentData?: React.Dispatch<React.SetStateAction<AppointmentData>>;
  setDoctorId?: (data: string) => void;
}) {
  const [isSelectDoctor, setIsSelectDoctor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorSelected, setDoctorSelected] = useState<Doctor>(DEFATUL_MEDIC);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectDoctor = (medic: Doctor) => {
    setIsSelectDoctor(true);
    setIsModalOpen(false);
    setDoctorSelected(medic);
    setDoctorId && setDoctorId(medic.id);
  };

  useEffect(() => {
    if (setAppointmentData) {
      setAppointmentData((prev: AppointmentData) => ({
        ...prev,
        doctor: doctorSelected,
      }));
    }
  }, [doctorSelected, setAppointmentData]);

  return (
    <>
      {isSelectDoctor ? (
        <div className="flex gap-2 items-center">
          <div className="flex pt-2  pb-2 pr-4 pl-4 gap-2 items-center w-72 border border-solid border-gray/200 h-11 rounded-lg">
            <div className="relative overflow-hidden rounded-full w-6 h-6 object-cover hover:cursor-pointer">
              <Image src={doctorSelected.image || no_user_img} alt="doctor" />
            </div>
            <p className="text-base font-medium">{doctorSelected.name}</p>
          </div>
          <Button variant="primary" handleClick={openModal}>
            Cambiar
          </Button>
        </div>
      ) : (
        <div className=" w-40">
          <Button variant="primary" handleClick={openModal}>
            <div className="flex gap-2">
              <Image className="" src={open} alt="arrowRight" />
              <p className="font-semibold	text-base">Seleccionar</p>
            </div>
          </Button>
        </div>
      )}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Selecciona un médico"
        >
          <ListToSearch type="medic" handleSelectDoctor={handleSelectDoctor} />
        </Modal>
      )}
    </>
  );
}
