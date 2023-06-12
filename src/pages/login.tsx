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
    <div className="w-full h-full bg-white flex">
      <div className="flex flex-col items-start px-10 py-16">
        <h1 className="text-32 font-medium text-black">Welcome back!</h1>
        <p className="mt-4 text-16 font-medium text-black">
          Enter your Credentials to access your account
        </p>

        <div className="mt-20">
          <label className="text-14 font-medium text-black">Email address</label>
          <input
            className="w-full mt-2 h-8 border border-solid border-gray-300 rounded-md px-2 text-10 font-medium text-gray-300"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-8">
          <label className="text-14 font-medium text-black">Password</label>
          <input
            className="w-full mt-2 h-8 border border-solid border-gray-300 rounded-md px-2 text-10 font-medium text-gray-300"
            type="password"
            placeholder="Name"
          />
          <p className="text-right text-10 font-medium text-blue-800">
            forgot password
          </p>
        </div>

        <div className="mt-4 flex items-center">
          <input
            className="w-4 h-4 border border-solid border-black rounded-2"
            type="checkbox"
          />
          <label className="ml-2 text-9 font-medium text-black">
            Remember for 30 days
          </label>
        </div>

        <button className="mt-8 w-full h-8 bg-green-700 border border-solid border-green-700 rounded-md text-13 font-bold text-white">
          Login
        </button>

        <div className="mt-20 flex items-center">
          <hr className="w-full border-2 border-solid border-gray-200" />
          <p className="mx-2 text-9 font-medium text-black bg-white">Or</p>
          <hr className="w-full border-2 border-solid border-gray-200" />
        </div>

        <div className="mt-12 flex">
          <button className="w-48 h-8 border border-solid border-gray-300 rounded-md flex items-center">
            <FontAwesomeIcon icon={faGoogle} />
            <span className="ml-4 text-12 font-medium text-black">
              Sign in with Google
            </span>
          </button>
          <button
            onClick={handleSubmit}
            className="ml-4 w-48 h-8 border border-solid border-gray-300 rounded-md flex items-center"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="ml-4 text-12 font-medium text-black">
              Sign in with Github
            </span>
          </button>
        </div>

        <p className="mt-20 text-14 font-medium">
          Don’t have an account? <span className="text-blue-800">Sign Up</span>
        </p>
      </div>

      <div
        className="w-1/2 h-full bg-cover bg-no-repeat rounded-l-3xl"
        style={{ backgroundImage: "url('https://via.placeholder.com/500x500')" }}
      ></div>
    </div>
  );
};

export default LoginPage;