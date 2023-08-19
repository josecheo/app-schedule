import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <div className="flex flex-col w-full min-h-screen p-8">
        <div className="flex h-20 justify-between border-b border-solid border-gray/200 ">
          <div>
            <h1 className="text-2xl font-semibold">Agenda</h1>
            <p className="text-gray/600 text-base mt-1">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="small-secondary">Dia</Button>
            <Button variant="primary">Semana</Button>
            <Button variant="secondary">Nueva cita</Button>
          </div>
        </div>
        {children}
      </div>
    </Layout>
  );
}
