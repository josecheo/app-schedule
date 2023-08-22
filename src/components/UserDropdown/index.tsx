"use client";
import { useState } from "react";
import Image from "next/image";
import imgJose from "../../../public/IMG_9946.jpg";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function UserDropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    router.push("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-full w-12 h-12 object-cover hover:cursor-pointer">
        <Image src={imgJose} alt="user" onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className="absolute bottom-12 bg-white border border-gray-200 rounded-md shadow-md">
          <ul>
            <li
              className=" w-40 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >
              Cerrar sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
