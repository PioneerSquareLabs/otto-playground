import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign in to your account</h1>
        <p className="text-gray-600 mb-4">
          Sign in with your GitHub account to access the application.
        </p>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;