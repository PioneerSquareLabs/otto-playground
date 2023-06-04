import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Layout from '~/components/Layout';

interface Props {}

const LoginPage: React.FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await signIn('github', { callbackUrl: `${window.location.origin}/dashboard` });
      if (result?.error) {
        // Handle error case (e.g., show a notification or update the UI)
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      // Handle error case (e.g., show a notification or update the UI)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout user={null}>
      <h1>Log in to Your Account</h1>
      <p>Use your GitHub account to log in and access your projects.</p>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Log in with GitHub'}
      </button>
    </Layout>
  );
};

export default LoginPage;