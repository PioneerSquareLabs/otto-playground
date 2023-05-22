_
import React, { FC, useEffect, useState } from 'react';
import { Document } from '~/types';
import styles from './DocumentCard.module.css';

interface Props {
  document: Document;
  onDocumentClick: (document: Document) => void;
}

const DocumentCard: FC<Props> = ({ document, onDocumentClick }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!document) {
      setError('Document information is not available.');
      setIsLoading(false);
      return;
    }

    // Fetch data from the API using Prisma
    // Assume that the necessary API endpoints are already created
    // Example: fetchDocumentData(document.id);

    setIsLoading(false);
  }, [document]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.documentCard} onClick={() => onDocumentClick(document)}>
      <h3 className={styles.documentTitle}>{document.title}</h3>
      <p className={styles.documentStatus}>Status: {document.status}</p>
      <p className={styles.documentDate}>Created: {new Date(document.createdAt).toLocaleDateString()}</p>
      <p className={styles.documentDate}>Updated: {new Date(document.updatedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default DocumentCard;