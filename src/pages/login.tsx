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
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold">Sign in to your account</h1>
        <p className="mb-4 text-gray-600">
          Sign in with your GitHub account to access the application.
        </p>
        <button
          onClick={handleSubmit}
          className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
