"use client";
import { useState } from "react";
import Image from "next/image";
import doctorimg from "../../../public/medico.jpg";
import Button from "@/components/Button";
import open from "../../../public/open.svg";
import ListToSearch from "@/components/ListToSearch";
import Modal from "@/components/Modal";
import { Medic } from "@/utils/type/interface";

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

export default function HandleDoctor() {
  const [isSelectDoctor, setIsSelectDoctor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorSelected, setDoctorSelected] = useState<Medic>(DEFATUL_MEDIC);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectDoctor = (medic: Medic) => {
    setIsSelectDoctor(true);
    setIsModalOpen(false);
    setDoctorSelected(medic);

  };

  return (
    <>
      {isSelectDoctor ? (
        <div className="flex gap-2 items-center">
          <div className="flex pt-2  pb-2 pr-4 pl-4 gap-2 items-center w-72 border border-solid border-gray/200 h-11 rounded-lg">
            <div className="relative overflow-hidden rounded-full w-6 h-6 object-cover hover:cursor-pointer">
              <Image src={doctorSelected.image} alt="doctor" />
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ListToSearch
          listOfMedics={listOfMedics}
          handleSelectDoctor={handleSelectDoctor}
        />
      </Modal>
    </>
  );
}
