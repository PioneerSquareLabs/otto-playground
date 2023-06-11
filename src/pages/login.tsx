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
    <div className="bg-gray-100 w-full h-full">
      <h1 className="text-4xl text-center text-black mt-0">Login</h1>
      <div className="bg-white w-full h-auto rounded-lg p-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg text-black">Email</label>
          <input type="email" id="email" placeholder="example@email.com" className="w-full h-8 bg-gray-200 border border-solid border-gray-300 rounded-md px-2 mt-2" />
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-lg text-black">Password</label>
            <a href="#" className="text-lg text-blue-600">Forgot password?</a>
          </div>
          <input type="password" id="password" placeholder="************" className="w-full h-8 bg-gray-200 border border-solid border-gray-300 rounded-md px-2 mt-2" />
        </div>
        <button onClick={handleSubmit} className="w-full h-9 bg-blue-600 text-white font-semibold rounded-lg mt-8">Login</button>
        <p className="text-lg text-center mt-8">Don’t have account? <a href="#" className="text-blue-600">Create new account</a></p>
      </div>
    </div>
  );
};

export default LoginPage;