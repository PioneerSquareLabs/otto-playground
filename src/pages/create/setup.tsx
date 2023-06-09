import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

const SetupPage: React.FC = () => {
  const [language, setLanguage] = useState("TypeScript");
  const [framework, setFramework] = useState("Next.js");
  const [frontendLibrary, setFrontendLibrary] = useState("React");
  const [backendService, setBackendService] = useState("Supabase");
  const [database, setDatabase] = useState("Prisma");
  const [hosting, setHosting] = useState("Vercel");
  const [authentication, setAuthentication] = useState("NextAuth");
  const [cssStyling, setCssStyling] = useState("Tailwind CSS + Tailwind UI");

  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Head>
          <title>Redirecting...</title>
        </Head>
        <main className="container mx-auto">
          <h1 className="text-2xl font-bold">Redirecting to login...</h1>
          <Link href="/login">
            <a className="text-blue-500">Click here if you are not redirected</a>
          </Link>
        </main>
      </>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send the selected options to the appropriate API endpoint
  };

  return (
    <>
      <Head>
        <title>Project Setup</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Project Setup</h1>
        <p className="text-lg mb-8">
          Select options for your project's system architecture.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Form fields for language, framework, frontend library, backend service, database, hosting, authentication, and CSS styling */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default SetupPage;