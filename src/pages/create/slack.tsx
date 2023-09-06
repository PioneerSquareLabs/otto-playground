import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Project } from '~/types';
import Layout from '~/components/Layout';

interface Props {
  project: Project;
}

export default function SlackIntegration({ project }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const [slackChannelId, setSlackChannelId] = useState<string | null>(project?.slackChannelId || '');

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session]);

  const handleSlackAuth = () => {
    // TODO: Implement Slack authentication logic here
    // This is a placeholder and needs to be replaced with actual implementation
    console.log('Slack authentication initiated');
    // Redirect to Slack OAuth endpoint
    window.location.href = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=incoming-webhook&redirect_uri=${process.env.SLACK_REDIRECT_URI}`;
  };

  const handleSaveSettings = async () => {
    // TODO: Implement save settings logic here
    // This is a placeholder and needs to be replaced with actual implementation
    console.log('Saving settings initiated');
    // Save the Slack Channel ID to the project
    const response = await fetch(`/api/projects/${project.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slackChannelId,
      }),
    });

    if (response.ok) {
      alert('Settings saved successfully');
    } else {
      alert('Failed to save settings');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Slack Integration</h1>
        <p className="mb-4">
          Connect your project to a Slack channel to receive updates and notifications.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSlackAuth}
        >
          Connect to Slack
        </button>
        <form onSubmit={handleSaveSettings}>
          <label htmlFor="slackChannelId" className="block mt-4">
            Slack Channel ID
          </label>
          <input
            id="slackChannelId"
            type="text"
            value={slackChannelId || ''}
            onChange={(e) => setSlackChannelId(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Settings
          </button>
        </form>
      </div>
    </Layout>
  );
}