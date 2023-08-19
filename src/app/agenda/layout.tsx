"use client";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useState } from "react";
import NewAppointment from "@/components/NewAppointment";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [newAppointment, setNewAppointment] = useState(false);

  const handleNewAppointment = () => {
    setNewAppointment(true);
  };
  const handleCancelNewAppointment = () => {
    setNewAppointment(false);
  };

  return (
    <Layout>
      <div className="flex flex-row w-full min-h-screen">
        <div
          className={`flex flex-col w-full min-h-screen p-8 ${
            newAppointment && "basis-1/2"
          }`}
        >
          <div className="flex h-20 justify-between border-b border-solid border-gray/200">
            <div>
              <h1 className="text-2xl font-semibold">Agenda</h1>
              <p className="text-gray/600 text-base mt-1">
                Manage your team members and their account permissions here.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="small-secondary" handleClick={() => {}}>
                Dia
              </Button>
              <Button variant="primary" handleClick={() => {}}>
                Semana
              </Button>
              {!newAppointment && (
                <Button variant="secondary" handleClick={handleNewAppointment}>
                  Nueva cita
                </Button>
              )}
            </div>
          </div>
          {children}
        </div>
        {newAppointment && (
          <NewAppointment
            onClose={handleCancelNewAppointment}
          />
        )}
      </div>
    </Layout>
  );
}
