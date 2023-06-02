import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { User, Project } from '~/types';

interface Props {
  users: User[];
  projects: Project[];
}

const IndexPage: React.FC<Props> = ({ users, projects }) => {
  return (
    <>
      <Head>
        <title>Otto - Home</title>
        <meta name="description" content="Otto - The ultimate project management tool" />
      </Head>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Otto</h1>
          <p className="text-xl mb-8">The ultimate project management tool</p>
          <Link href="/signup">
            <a className="bg-blue-500 text-white px-6 py-3 rounded">Get Started</a>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Video Demos</h2>
          {/* Add video demos here */}
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          {/* Add features list here */}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          {/* Add testimonials here */}
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
          {/* Add sign-up form here */}
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Fetch data from API endpoints using Prisma
  const users: User[] = []; // Replace with actual API call
  const projects: Project[] = []; // Replace with actual API call

  return {
    props: {
      users,
      projects,
    },
  };
};

export default IndexPage;