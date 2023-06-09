import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { Project } from '~/types';

interface Props {
  project: Project;
}

const SlackIntegration: React.FC<Props> = ({ project }) => {
  const { data: session } = useSession();
  const [slackChannelId, setSlackChannelId] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Fetch the current Slack integration settings for the project from the API
    // Update the state with the fetched data
  }, []);

  const handleSlackAuth = () => {
    // Handle the Slack authentication process
    // Open a new window with the Slack OAuth URL
    // Listen for the `message` event to receive the `slackChannelId` after successful authentication
    // Update the state with the received `slackChannelId`
  };

  const handleSaveSettings = () => {
    // Save the updated Slack integration settings to the API
    // Make a POST request to the API with the updated settings
    // Handle any errors that may occur
  };

  if (!session) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Slack Integration</h1>
      <p className="text-gray-600 mb-6">Connect your project to Slack to receive updates and manage tasks directly from your Slack workspace.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6" onClick={handleSlackAuth}>Connect to Slack</button>
      <form className="space-y-4" onSubmit={handleSaveSettings}>
        <div className="flex items-center">
          <label htmlFor="slackChannel" className="w-32 font-medium">Slack Channel:</label>
          <input id="slackChannel" type="text" value={slackChannelId} onChange={(e) => setSlackChannelId(e.target.value)} className="border border-gray-300 px-2 py-1 rounded w-full" />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default SlackIntegration;