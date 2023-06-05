import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Layout from "~/components/Layout";
import { User } from "~/types";

interface Props {
  user?: User | null;
}

const LoginPage: React.FC<Props> = ({ user }) => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const success = await signIn("github");

    if (success) {
      router.push("/dashboard");
    } else {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <Layout>
      <h1 className="mb-4 text-2xl font-bold">Login to Your Account</h1>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleLogin}
      >
        Login with GitHub
      </button>
    </Layout>
  );
};

export default LoginPage;
