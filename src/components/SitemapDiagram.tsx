import React from 'react';
import { ProjectSitemap } from '~/types';

interface Props {
  sitemapItems: ProjectSitemap[];
}

const SitemapDiagram: React.FC<Props> = ({ sitemapItems }) => {
  const sitemapElements = sitemapItems.map((item) => (
    <div key={item.id} className="bg-white p-4 rounded-md shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{item.fileName}</h3>
      <p className="text-sm text-gray-600 mb-2">{item.fileDescription}</p>
      {item.figmaUrl && (
        <a
          href={item.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm hover:underline"
        >
          View Figma design
        </a>
      )}
    </div>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sitemapElements.length > 0 ? (
        sitemapElements
      ) : (
        <p className="text-gray-500">No sitemap items have been added yet.</p>
      )}
    </div>
  );
};

export default SitemapDiagram;