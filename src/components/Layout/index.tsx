'use client'
import Image from "next/image";
import Logo from "../../../public/Logomark.svg";
import Navegation from "@/components/Navegation";
import UserDropdown from "@/components/UserDropdown";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="bg-gray/900 w-18 flex flex-col items-center justify-between p-6 ">
        <div className="flex flex-col items-center gap-3">
          {/* logo */}
          <Image className="hover:cursor-pointer" onClick={() => router.push("/")} src={Logo} alt="Logo" width={32} height={32} />
          {/* navigation */}
          <Navegation />
        </div>
        {/* UserDropdown */}
        <UserDropdown />
      </div>
      {children}
    </div>
  );
}
