import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleSignIn = () => {
    // Implement sign in functionality here
    signIn("credentials", { email, password, rememberMe });
  };

  const handleSignInWithGithub = () => {
    signIn("github");
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality here
    router.push("/forgot-password");
  };

  const handleSignUp = () => {
    // Implement sign up functionality here
    router.push("/signup");
  };

  return (
    <div className="w-full h-screen bg-purple-900 flex">
      <div className="w-1/2 h-full bg-white p-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-3xl font-medium text-black uppercase">Welcome back</div>
          <div className="text-base text-gray-500">Welcome back! Please enter your details.</div>
          <div className="w-full max-w-xl">
            <label className="text-base font-medium text-black">Email</label>
            <input className="w-full h-10 border border-gray-300 rounded-md shadow-md p-2" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="w-full max-w-xl">
            <label className="text-base font-medium text-black">Password</label>
            <input type="password" className="w-full h-10 border border-gray-300 rounded-md shadow-md p-2" placeholder="**********" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="w-full max-w-xl flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded-md" checked={rememberMe} onChange={handleRememberMeChange} />
              <span className="text-sm font-medium text-black ml-2">Remember me</span>
            </div>
            <span className="text-sm font-medium text-black cursor-pointer" onClick={handleForgotPassword}>Forgot password</span>
          </div>
          <button onClick={handleSignIn} className="w-full max-w-xl h-10 bg-red-500 rounded-md shadow-md text-white font-medium">Sign in</button>
          <button onClick={handleSignInWithGithub} className="w-full max-w-xl h-10 border border-gray-300 rounded-md shadow-md flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faGithub} />
            <span className="text-base font-medium text-black">Sign in with GitHub</span>
          </button>
          <span className="text-sm font-medium text-center text-black cursor-pointer" onClick={handleSignUp}>Don’t have an account? Sign up for free!</span>
        </div>
      </div>
      <div className="w-1/2 h-full bg-gray-300">
        <img src="/images/914c4597836d1286ced052976e5c288c93299b83.jpg" alt="Illustration of a user logging in" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;