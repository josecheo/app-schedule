"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import no_user_img from "../../../public/no_user_img.png";
import Button from "@/components/Button";
import open from "../../../public/open.svg";
import ListToSearch from "@/components/ListToSearch";
import Modal from "@/components/Modal";
import { Doctor, AppointmentData } from "@/utils/type/interface";

const listOfMedics = [
  {
    name: "Antonio Armas",
    specialty: "Cardiólogo",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Antonio Armas",
    specialty: "Medico General",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Amadeo Perez",
    specialty: "Oncólogo",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Bristin Watsonz",
    specialty: "Cirujano",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Cameron Williamson",
    specialty: "Cardiólogo",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
];

const DEFATUL_MEDIC = {
  name: "",
  specialty: "",
  image: "",
  typeDocument: "",
  document: "",
};

export default function HandleDoctor({
  setAppointmentData,
}: {
  setAppointmentData?: (data: any) => void;
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
  };

  useEffect(() => {
    if(setAppointmentData) {
      setAppointmentData((prev: AppointmentData) => ({
        ...prev,
        doctor: doctorSelected.name,
      }));
    }
  }, [doctorSelected,setAppointmentData]);

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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Selecciona un médico"
      >
        <ListToSearch
          type="medic"
          listOfMedics={listOfMedics}
          handleSelectDoctor={handleSelectDoctor}
        />
      </Modal>
    </>
  );
}
