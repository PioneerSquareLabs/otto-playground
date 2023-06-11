import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

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
    <div className="h-full w-full bg-white">
      <div className="flex flex-col items-center">
        <h1 className="mt-56 text-4xl font-medium text-black">Welcome back!</h1>
        <p className="mt-4 text-lg font-medium text-black">
          Enter your Credentials to access your account
        </p>

        <div className="mt-20 w-96">
          <label className="block text-lg font-medium text-black">
            Email address
          </label>
          <input
            className="mt-1 h-8 w-full rounded-md border border-gray-300 px-2 text-sm font-medium text-gray-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-6 w-96">
          <label className="block text-lg font-medium text-black">
            Password
          </label>
          <input
            className="mt-1 h-8 w-full rounded-md border border-gray-300 px-2 text-sm font-medium text-gray-400"
            placeholder="Name"
          />
          <p className="mt-1 text-right text-sm font-medium text-blue-700">
            forgot password
          </p>
        </div>

        <div className="mt-6 flex items-center">
          <input type="checkbox" className="rounded-sm border border-black" />
          <p className="ml-2 text-xs font-medium text-black">
            Remember for 30 days
          </p>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 h-8 w-96 rounded-md border border-green-700 bg-green-700 text-sm font-bold text-white"
        >
          Login
        </button>

        <div className="mt-24 w-96">
          <hr className="border-t-2 border-gray-200" />
          <p className="absolute left-1/2 -translate-x-1/2 bg-white px-1 text-xs font-medium text-black">
            Or
          </p>
        </div>

        <div className="mt-16 flex w-96 justify-between">
          <button className="flex h-8 w-48 items-center rounded-md border border-gray-300">
            <FontAwesomeIcon icon={faGoogle} className="h-5 w-5" />
            <p className="ml-4 text-sm font-medium text-black">
              Sign in with Google
            </p>
          </button>
          <button className="flex h-8 w-48 items-center rounded-md border border-gray-300">
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            <p className="ml-4 text-sm font-medium text-black">
              Sign in with Github
            </p>
          </button>
        </div>

        <p className="mt-16 text-lg font-medium">
          Don’t have an account? <span className="text-blue-700">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
