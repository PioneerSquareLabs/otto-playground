import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { User } from '~/types';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

interface Props {
  user: User | null;
}

const HomePage: NextPage<Props> = ({ user }) => {
  const router = useRouter();

  const handleCTAClick = () => {
    if (user) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  return (
    <>
      <Head>
        <title>Welcome to Otto</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to Otto</h1>
            <h2 className="text-2xl text-center mb-8">AI-Powered Development Platform</h2>
            <p className="text-center mb-8">
              Otto is an AI-powered development platform that helps you build web applications faster and more efficiently.
              With Otto, you can create projects, manage tasks, and collaborate with your team in one place.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleCTAClick}
              >
                {user ? 'Go to Dashboard' : 'Get Started'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;