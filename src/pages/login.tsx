import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { User } from '~/types';
import 'tailwindcss/tailwind.css';

interface Props {
  user: User | null;
}

const LoginPage: React.FC<Props> = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const result = await signIn('github');
    setLoading(false);

    if (result) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4">Login to Otto</h1>
        <p className="mb-6">
          Please log in with your GitHub account to access your projects and manage your tasks.
        </p>
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Logging in...' : 'Login with GitHub'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;