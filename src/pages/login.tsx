import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const LoginPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = () => {
    signIn("github");
  };

  return (
    <div className="bg-gray-100 w-full h-full flex flex-col items-center">
      <h1 className="text-4xl text-gray-800 mt-8">Login</h1>
      <div className="bg-white w-full mt-8 p-6 rounded-2xl">
        <div className="flex flex-col">
          <label className="text-lg text-gray-800 mb-2">Email</label>
          <input className="bg-gray-200 border border-gray-300 rounded-md px-2 py-1 text-lg text-gray-800" type="email" placeholder="example@email.com" />
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex justify-between">
            <label className="text-lg text-gray-800">Password</label>
            <a href="#" className="text-lg text-blue-500">Forgot password?</a>
          </div>
          <input className="bg-gray-200 border border-gray-300 rounded-md px-2 py-1 mt-2 text-lg text-gray-800" type="password" placeholder="************" />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 w-full mt-8 py-2 rounded-2xl text-lg font-semibold text-white"
        >
          Login
        </button>
        <p className="text-lg mt-8 text-center">Don’t have account? <a href="#" className="text-blue-500">Create new account</a></p>
      </div>
    </div>
  );
};

export default LoginPage;