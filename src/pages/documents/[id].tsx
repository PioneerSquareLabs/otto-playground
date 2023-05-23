import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Document } from '~/types';

interface Props {
  document: Document;
}

const DocumentPage: React.FC<Props> = ({ document }) => {
  const router = useRouter();
  const { id } = router.query;

  const [document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the document data from the API and update the state
      fetch(`/api/documents/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch document data');
          }
          return response.json();
        })
        .then((data: Document) => setDocument(data))
        .catch((error) => {
          console.error(error);
          setDocument(null);
        });
    }
  }, [id]);

  return (
    <div>
      {document ? (
        <>
          <h1>{document.title}</h1>
          <p>{document.content}</p>
          <p>Status: {document.status}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DocumentPage;