import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  React.useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
    // Save rememberMe state to localStorage or cookie
  };

  const handleForgotPassword = () => {
    // Redirect to forgot password page or open a modal
    router.push("/forgot-password");
  };

  const handleSubmit = () => {
    // Implement sign in functionality here
    signIn("credentials", { email, password, callbackUrl: "/dashboard" });
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <div className="flex h-screen w-full bg-green-900">
      <div className="h-full w-1/2 bg-white p-4">
        <div className="text-center text-4xl font-medium uppercase text-black">
          Welcome back
        </div>
        <div className="text-center text-gray-500">
          Welcome back! Please enter your details.
        </div>
        <div className="mt-10">
          <label className="block font-medium text-black">Email</label>
          <input
            className="mt-2 h-10 w-full rounded-md border border-gray-300 p-2 shadow-md"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mt-10">
          <label className="block font-medium text-black">Password</label>
          <input
            type="password"
            className="mt-2 h-10 w-full rounded-md border border-gray-300 p-2 shadow-md"
            placeholder="**********"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label className="font-medium text-black">Remember me</label>
          </div>
          <a
            href="#"
            className="font-medium text-black"
            onClick={handleForgotPassword}
          >
            Forgot password
          </a>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 h-10 w-full rounded-md bg-red-500 font-medium text-white shadow-md"
        >
          Sign in
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="mt-4 flex h-10 w-full items-center justify-center rounded-md border border-gray-300 shadow-md"
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span className="ml-2 font-medium text-black">
            Sign in with Google
          </span>
        </button>
        <div className="mt-4 text-center text-sm font-medium">
          Don’t have an account? Sign up for free!
        </div>
      </div>
      <div className="h-full w-1/2 bg-gray-300">
        <img
          src="/images/f61fbb17b5c6bfbdbb6a1422915d840278950b12.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
