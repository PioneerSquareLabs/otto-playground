import { useState } from 'react';
import { useRouter } from 'next/router';
import { TeamMember, Project } from '~/types';
import Layout from '~/components/Layout';
import { createTeamMember } from '~/api/team-members';

interface Props {
  project: Project;
}

const NewTeamMember: React.FC<Props> = ({ project }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const projectId = router.query.projectId as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTeamMember({ name, email, projectId });
      router.push(`/project/${projectId}`);
    } catch (error) {
      console.error('Error creating team member:', error);
      // Display appropriate error message to the user
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Team Member</button>
      </form>
    </Layout>
  );
};

export default NewTeamMember;