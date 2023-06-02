import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signIn("github", {
        callbackUrl: `${window.location.origin}/dashboard`,
      });
      if (!result?.error) {
        router.push("/dashboard");
      } else {
        setErrorMessage(
          "An error occurred during the login process. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        "An error occurred during the login process. Please try again."
      );
    }
  };

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Otto</h1>
        <h2 className="mb-8 text-2xl">
          Please log in with your GitHub account
        </h2>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login with GitHub
        </button>
        {errorMessage && (
          <div className="mt-4 text-red-500">{errorMessage}</div>
        )}
      </div>
    </Layout>
  );
};

export default Login;
