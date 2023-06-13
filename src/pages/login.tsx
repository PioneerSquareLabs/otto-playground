import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    <div className="w-full h-screen bg-green-900 flex">
      <div className="w-1/2 h-full bg-white p-10">
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <h1 className="text-4xl font-medium text-black uppercase">Welcome back</h1>
            <p className="text-base text-gray-600">Welcome back! Please enter your details.</p>
          </div>
          <div className="w-full max-w-xl mb-10">
            <label className="text-base font-medium text-black">Email</label>
            <div className="w-full bg-gray-300 border border-gray-400 rounded-lg shadow-md">
              <input className="w-full p-2" placeholder="Enter your email" />
            </div>
          </div>
          <div className="w-full max-w-xl mb-10">
            <label className="text-base font-medium text-black">Password</label>
            <div className="w-full bg-gray-300 border border-gray-400 rounded-lg shadow-md">
              <input className="w-full p-2" type="password" placeholder="**********" />
            </div>
          </div>
          <div className="w-full max-w-xl flex justify-between items-center mb-10">
            <div className="flex items-center">
              <div className="w-3 h-3 border border-gray-400 rounded-sm"></div>
              <p className="text-base font-medium text-black ml-2">Remember me</p>
            </div>
            <p className="text-base font-medium text-black">Forgot password</p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full max-w-xl py-2 bg-red-600 rounded-lg shadow-md text-white font-medium mb-10"
          >
            Sign in
          </button>
          <button
            onClick={handleSubmit}
            className="w-full max-w-xl py-2 border border-gray-400 rounded-lg shadow-md text-black font-medium mb-10 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ml-2">Sign in with Google</span>
          </button>
          <p className="text-sm font-medium text-center">Don’t have an account? Sign up for free!</p>
        </div>
      </div>
      <div className="w-1/2 h-full bg-gray-300">
        <img src="https://via.placeholder.com/500x500" alt="placeholder" />
      </div>
    </div>
  );
};

export default LoginPage;