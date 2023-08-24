import Input from "@/components/Input";
import search from "../../../public/search.svg";
import Image from "next/image";
import { Doctor, Patient } from "@/utils/type/interface";
import no_user_img from "../../../public/no_user_img.png";
import { useQuery } from "@apollo/client";

import {
  GET_PRACTITIONER_BY_NAME,
  GET_PATIENT_BY_NAME,
} from "@/graphql/queries";
import { useEffect, useState } from "react";
import Loading from "../Loading";

type ListToSearchProps = {
  handleSelectDoctor: (e: Doctor) => void;
  type: "medic" | "patient";
  text?: string;
};

interface GroupedMedics {
  [letter: string]: Doctor[] | Patient[];
}

export default function ListToSearch({
  handleSelectDoctor,
  type,
  text,
}: ListToSearchProps) {
  const [name, setName] = useState(text || "");
  const [debouncedName, setDebouncedName] = useState(name);
  let groupedPeopelList: GroupedMedics = {};
  let query = type === "medic" ? GET_PRACTITIONER_BY_NAME : GET_PATIENT_BY_NAME;
  const { loading, error, data, refetch } = useQuery(query, {
    variables: {
      name,
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedName(name);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [name]);

  useEffect(() => {
    if (text !== undefined) {
      setName(text);
    }
  }, [text]);

  useEffect(() => {
    if (debouncedName) {
      refetch();
    }
  }, [debouncedName]);

  if (!loading) {
    if (type === "medic") {
      const { getPractitionerByName } = data || {};
      const groupedMedics = getPractitionerByName.reduce(
        (groups: GroupedMedics, medic: Doctor) => {
          const firstLetter = medic.name.charAt(0).toUpperCase();
          if (!groups[firstLetter]) {
            groups[firstLetter] = [];
          }
          groups[firstLetter].push(medic);
          return groups;
        },
        {}
      );
      groupedPeopelList = groupedMedics;
    }
    if (type === "patient") {
      const { getPatientByName } = data || {};
      const groupedMedics = getPatientByName.reduce(
        (groups: GroupedMedics, medic: Doctor) => {
          const firstLetter = medic.name.charAt(0).toUpperCase();
          if (!groups[firstLetter]) {
            groups[firstLetter] = [];
          }
          groups[firstLetter].push(medic);
          return groups;
        },
        {}
      );
      groupedPeopelList = groupedMedics;
    }
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col mt-4 h-[570px]">
      {type === "medic" && (
        <div className="p-6">
          <Input
            placeholder="Buscar..."
            value={name}
            onChange={setName}
            icon={search}
          />
        </div>
      )}
      {loading ? (
        <div className="flex flex-col items-center p-5 justify-center w-full h-full">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col overflow-y-auto">
          {Object.keys(groupedPeopelList).map((letter) => (
            <div key={letter}>
              <div className="flex w-full bg-gray/50 h-10 items-center p-6 border-b border-t border-solid border-gray/200">
                <h2 className="text-xs font-medium">{letter}</h2>
              </div>
              <ul>
                {groupedPeopelList[letter].map((medic, index) => (
                  <li
                    key={index}
                    className="flex items-center h-72"
                    onClick={() => handleSelectDoctor(medic)}
                  >
                    <div className="flex w-full items-center gap-4 h-72 hover:bg-gray/10 cursor-pointer p-6 border-b border-solid border-gray/200 ">
                      <div className="relative overflow-hidden rounded-full w-10 h-10 object-cover">
                        <Image src={medic.image || no_user_img} alt="doctor" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {medic.name}
                        </span>
                        <span className="text-sm font-normal text-gray/500">
                          {medic.name}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
