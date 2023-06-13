import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement sign in with email and password
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
  };

  const handleSignUp = () => {
    // TODO: Redirect to sign up page
  };

  return (
    <div className="w-full h-screen bg-green-900 flex">
      <div className="w-1/2 h-full bg-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-black uppercase">Welcome back</h1>
          <p className="text-base text-gray-600">Welcome back! Please enter your details.</p>
        </div>
        <form className="flex flex-col space-y-8 mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-base font-medium text-black">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="text-base font-light text-gray-600 border border-gray-300 rounded-lg shadow-md p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-base font-medium text-black">Password</label>
            <input type="password" id="password" placeholder="**********" className="text-base font-light text-gray-600 border border-gray-300 rounded-lg shadow-md p-2" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="border border-gray-300 rounded-sm" />
              <label htmlFor="remember" className="text-base font-medium text-black ml-2">Remember me</label>
            </div>
            <a href="#" onClick={handleForgotPassword} className="text-base font-medium text-black">Forgot password</a>
          </div>
          <button type="submit" className="text-base font-medium text-white bg-red-600 rounded-lg shadow-md p-2">Sign in</button>
          <button onClick={handleGoogleSignIn} className="text-base font-medium text-black border border-gray-300 rounded-lg shadow-md p-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faGoogle} />
            <span className="ml-2">Sign in with Google</span>
          </button>
        </form>
        <p className="text-sm font-medium text-center mt-8" onClick={handleSignUp}>Don’t have an account? Sign up for free!</p>
      </div>
      <div className="w-1/2 h-full bg-gray-300">
        <img src="/images/f61fbb17b5c6bfbdbb6a1422915d840278950b12.jpg" className="object-cover w-full h-full" alt="Background" />
      </div>
    </div>
  );
};

export default LoginPage;