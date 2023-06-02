import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import Layout from '~/components/Layout';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signIn('github', { callbackUrl: `${window.location.origin}/dashboard` });
      if (!result?.error) {
        router.push('/dashboard');
      } else {
        setErrorMessage('An error occurred during the login process. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during the login process. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Otto</h1>
        <h2 className="text-2xl mb-8">Please log in with your GitHub account</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login with GitHub
        </button>
        {errorMessage && (
          <div className="mt-4 text-red-500">
            {errorMessage}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Login;