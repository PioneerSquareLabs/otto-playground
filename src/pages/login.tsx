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
    <div className="bg-[#0f172a] w-full h-full">
      <div className="bg-white w-[1536px] h-[1042px] mx-auto mt-32">
        <div className="ml-48 mt-80">
          <h1 className="text-4xl font-medium text-black">Welcome back!</h1>
          <p className="text-lg font-medium text-black mt-4">
            Enter your Credentials to access your account
          </p>

          <div className="mt-12">
            <label className="text-lg font-medium text-black block mb-2">
              Email address
            </label>
            <input
              className="w-[404px] h-8 border border-solid border-[#d9d9d9] rounded-md px-4 py-2 text-sm font-medium text-[#d9d9d9]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-8">
            <label className="text-lg font-medium text-black block mb-2">
              Password
            </label>
            <input
              className="w-[404px] h-8 border border-solid border-[#d9d9d9] rounded-md px-4 py-2 text-sm font-medium text-[#d9d9d9]"
              placeholder="Name"
            />
            <p className="text-right text-sm font-medium text-[#0c2a92] mt-1">
              forgot password
            </p>
          </div>

          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              className="border border-solid border-black rounded-sm w-4 h-4"
            />
            <label className="text-xs font-medium text-black ml-2">
              Remember for 30 days
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-[404px] h-8 bg-[#3a5b22] border border-solid border-[#3a5b22] rounded-md text-lg font-semibold text-white mt-8"
          >
            Login
          </button>

          <div className="relative mt-16">
            <div className="absolute left-0 w-[400px] h-px border-t-2 border-solid border-[#f5f5f5]"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-2">
              <span className="text-xs font-medium text-black">Or</span>
            </div>
          </div>

          <div className="flex justify-between mt-16">
            <button className="w-[190px] h-8 border border-solid border-[#d9d9d9] rounded-md flex items-center px-4">
              <FontAwesomeIcon icon={faGoogle} />
              <span className="text-sm font-medium text-black ml-4">
                Sign in with Google
              </span>
            </button>
            <button
              onClick={handleSubmit}
              className="w-[190px] h-8 border border-solid border-[#d9d9d9] rounded-md flex items-center px-4"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="text-sm font-medium text-black ml-4">
                Sign in with Github
              </span>
            </button>
          </div>

          <p className="text-lg font-medium mt-32">
            Don’t have an account?{" "}
            <span className="underline">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;