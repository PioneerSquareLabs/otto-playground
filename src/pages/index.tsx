import Head from 'next/head';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const IndexPage: NextPage = () => {
  const [email, setEmail] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    signIn('email', { email });
  };

  return (
    <>
      <Head>
        <title>Otto - Project Management Made Easy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Otto</h1>
          </div>
        </header>
        <main>
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
                Project Management Made Easy
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Otto
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                Otto is a powerful project management tool that helps you manage your projects, tasks, and team members with ease.
              </p>
              <div className="mt-12">
                <button
                  onClick={() => signIn()}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
              <div className="mt-10">
                {/* Add feature cards here */}
              </div>
            </div>
          </div>
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
              <div className="mt-10">
                {/* Add testimonial cards here */}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Sign up</h2>
              <form onSubmit={handleSignUp} className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default IndexPage;