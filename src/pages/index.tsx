import Head from 'next/head';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
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
                  onClick={handleLoginRedirect}
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
              <div className="mt-8 space-y-6">
                <div>
                  <button
                    onClick={handleLoginRedirect}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default IndexPage;