"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: { isAuthenticated: boolean }) => state.isAuthenticated
  );

  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
    router.push("/agenda");
  };

  if (isAuthenticated) {
    router.push("/agenda");
    return null;
  }

  return (
    <div className="flex flex-col w-full mt-8 min-h-48 rounded-lg border border-solid border-gray/200 shadow-sm">
      <h2>Login</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}
