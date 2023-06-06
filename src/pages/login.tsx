import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Layout from '~/components/Layout';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signIn('github');
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Login with GitHub
      </button>
    </Layout>
  );
};

export default LoginPage;