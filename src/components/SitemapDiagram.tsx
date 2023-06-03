import React, { useState } from 'react';
import { SitemapNode } from '~/types';
import 'tailwindcss/tailwind.css';

interface Props {
  nodes: SitemapNode[];
  onNodeClick: (node: SitemapNode) => void;
  onNodeEdit: (node: SitemapNode) => void;
  onNodeApproval: (node: SitemapNode) => void;
}

const SitemapDiagram: React.FC<Props> = ({ nodes, onNodeClick, onNodeEdit, onNodeApproval }) => {
  const [selectedNode, setSelectedNode] = useState<SitemapNode | null>(null);

  const handleNodeClick = (node: SitemapNode) => {
    setSelectedNode(node);
    onNodeClick(node);
  };

  const handleNodeEdit = (node: SitemapNode) => {
    onNodeEdit(node);
  };

  const handleNodeApproval = (node: SitemapNode) => {
    onNodeApproval(node);
  };

  return (
    <div className="flex flex-wrap">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="bg-white border-2 border-gray-200 p-4 m-2 rounded-lg shadow-md w-64"
          onClick={() => handleNodeClick(node)}
        >
          <h3 className="text-lg font-semibold">{node.name}</h3>
          <p className="text-sm text-gray-500">{node.description}</p>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                handleNodeEdit(node);
              }}
            >
              Edit
            </button>
            <button
              className="bg-green-500 text-white px-3 py-1 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                handleNodeApproval(node);
              }}
            >
              {node.approved ? 'Approved' : 'Approve'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SitemapDiagram;