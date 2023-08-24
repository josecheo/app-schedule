"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
    if (isAuthenticated) {
      router.push("/agenda");
    }
  }, [isAuthenticated]);

  return <></>;
}
