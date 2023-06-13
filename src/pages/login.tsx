import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
      <div className="w-1/2 h-full bg-white p-4">
        <div className="text-center text-3xl font-medium text-black uppercase">Welcome back</div>
        <div className="text-center text-base text-gray-500">Welcome back! Please enter your details.</div>
        <div className="mt-8">
          <label className="block text-base font-medium text-black">Email</label>
          <input className="w-full h-10 border border-gray-300 rounded-lg shadow-md mt-2 px-4 text-base text-gray-500" placeholder="Enter your email" />
        </div>
        <div className="mt-8">
          <label className="block text-base font-medium text-black">Password</label>
          <input type="password" className="w-full h-10 border border-gray-300 rounded-lg shadow-md mt-2 px-4 text-base text-gray-500" placeholder="**********" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-black" />
            <span className="ml-2 text-base font-medium text-black">Remember me</span>
          </label>
          <a href="#" className="text-base font-medium text-black">Forgot password</a>
        </div>
        <button onClick={handleSubmit} className="w-full h-10 bg-red-500 rounded-lg shadow-md mt-4 text-base font-medium text-white">Sign in</button>
        <button className="w-full h-10 border border-gray-300 rounded-lg shadow-md mt-4 flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="ml-2 text-base font-medium text-black">Sign in with Google</span>
        </button>
        <div className="text-center text-sm font-medium text-black mt-4">Don’t have an account? Sign up for free!</div>
      </div>
      <div className="w-1/2 h-full bg-gray-300">
        <img src="/public/images/f61fbb17b5c6bfbdbb6a1422915d840278950b12.jpg" alt="Background" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default LoginPage;