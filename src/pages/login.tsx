import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

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
    <div className="bg-[#0f172a] min-h-screen">
      <div className="bg-white w-[1536px] h-[1042px] mx-auto mt-24">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium text-black mt-24">Welcome back!</h1>
          <p className="text-lg font-medium text-black mt-4">Enter your Credentials to access your account</p>
          <div className="mt-16">
            <label className="block text-base font-medium text-black mb-2">Email address</label>
            <input className="w-[404px] h-8 border border-solid border-[#d9d9d9] rounded-md px-2 text-xs font-medium text-[#d9d9d9]" placeholder="Enter your email" />
          </div>
          <div className="mt-8">
            <label className="block text-base font-medium text-black mb-2">Password</label>
            <input className="w-[404px] h-8 border border-solid border-[#d9d9d9] rounded-md px-2 text-xs font-medium text-[#d9d9d9]" placeholder="Name" />
            <p className="text-right text-xs font-medium text-[#0c2a92] mt-1">forgot password</p>
          </div>
          <div className="flex items-center mt-8">
            <input type="checkbox" className="border border-solid border-black rounded-sm mr-2" />
            <label className="text-xs font-medium text-black">Remember for 30 days</label>
          </div>
          <button onClick={handleSubmit} className="bg-[#3a5b22] w-[404px] h-8 rounded-md text-white font-semibold mt-8">Login</button>
          <div className="relative mt-16">
            <hr className="w-[400px] border-2 border-solid border-[#f5f5f5]" />
            <span className="absolute left-1/2 -translate-x-1/2 top-[-7px] bg-white px-1 text-xs font-medium text-black">Or</span>
          </div>
          <div className="flex justify-between w-[403px] mt-8">
            <button className="border border-solid border-[#d9d9d9] rounded-md w-[190px] h-8 flex items-center">
              <FontAwesomeIcon icon={faGoogle} />
              <span className="text-sm font-medium text-black ml-4">Sign in with Google</span>
            </button>
            <button onClick={handleSubmit} className="border border-solid border-[#d9d9d9] rounded-md w-[190px] h-8 flex items-center">
              <FontAwesomeIcon icon={faGithub} />
              <span className="text-sm font-medium text-black ml-4">Sign in with Github</span>
            </button>
          </div>
          <p className="text-base font-medium mt-16">Don’t have an account? <span className="text-blue-600">Sign Up</span></p>
        </div>
        <div className="absolute top-0 right-0 w-[781.5px] h-[1042px] bg-cover bg-no-repeat rounded-[45px 0 0 45px]" style={{ backgroundImage: "url('https://via.placeholder.com/781x1042')" }}></div>
      </div>
    </div>
  );
};

export default LoginPage;