import React from 'react';
import { Document } from '~/types';

interface Props {
  document: Document;
  onClick?: () => void;
}

const DocumentCard: React.FC<Props> = ({ document, onClick }) => {
  const { title, content, status } = document;

  return (
    <div className="document-card" onClick={onClick}>
      <h3 className="document-title">{title}</h3>
      <p className="document-content">{content}</p>
      <span className="document-status">{status}</span>
    </div>
  );
};

export default DocumentCard;