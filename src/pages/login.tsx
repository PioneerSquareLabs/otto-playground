import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

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
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality here
  };

  const handleSubmit = () => {
    // Implement sign in functionality here
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <div className="w-full h-screen bg-green-900 flex">
      <div className="w-1/2 h-full bg-white p-4">
        <div className="text-center text-4xl font-medium text-black uppercase">Welcome back</div>
        <div className="text-center text-gray-500">Welcome back! Please enter your details.</div>
        <div className="mt-10">
          <label className="block text-black font-medium">Email</label>
          <input className="w-full h-10 mt-2 p-2 border border-gray-300 rounded-md shadow-md" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mt-10">
          <label className="block text-black font-medium">Password</label>
          <input type="password" className="w-full h-10 mt-2 p-2 border border-gray-300 rounded-md shadow-md" placeholder="**********" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" checked={rememberMe} onChange={handleRememberMeChange} />
            <label className="text-black font-medium">Remember me</label>
          </div>
          <a href="#" className="text-black font-medium" onClick={handleForgotPassword}>Forgot password</a>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full h-10 mt-4 bg-red-500 rounded-md shadow-md text-white font-medium"
        >
          Sign in
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="w-full h-10 mt-4 border border-gray-300 rounded-md shadow-md flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span className="ml-2 text-black font-medium">Sign in with Google</span>
        </button>
        <div className="mt-4 text-center text-sm font-medium">Don’t have an account? Sign up for free!</div>
      </div>
      <div className="w-1/2 h-full bg-gray-300">
        <img src="/images/f61fbb17b5c6bfbdbb6a1422915d840278950b12.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;