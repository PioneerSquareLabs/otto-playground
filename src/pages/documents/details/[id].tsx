import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Document } from '~/types';
import axios from 'axios';
import { Box, Text, Button } from '@chakra-ui/react';

interface Props {
  document: Document;
}

const DocumentDetails: React.FC<Props> = ({ document }) => {
  const [documentData, setDocumentData] = useState<Document>(document);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const response = await axios.get(`/api/documents/${id}`);
        setDocumentData(response.data);
      } catch (error) {
        console.error('Error fetching document data:', error);
      }
    };

    fetchDocumentData();
  }, [id]);

  const handleDeleteDocument = async () => {
    try {
      await axios.delete(`/api/documents/${id}`);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const handleApproveDocument = async () => {
    try {
      await axios.patch(`/api/documents/${id}`, { status: 'Approved' });
      setDocumentData({ ...documentData, status: 'Approved' });
    } catch (error) {
      console.error('Error approving document:', error);
    }
  };

  return (
    <Box>
      <Text fontSize="2xl">{documentData.title}</Text>
      <Text>{documentData.content}</Text>
      <Text>Status: {documentData.status}</Text>
      <Button onClick={() => router.push(`/documents/${id}/edit`)}>Edit Document</Button>
      <Button onClick={handleDeleteDocument}>Delete Document</Button>
      <Button onClick={handleApproveDocument}>Approve Document</Button>
    </Box>
  );
};

export default DocumentDetails;