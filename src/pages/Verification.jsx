import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { verifyEmail } from '../services/api';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const MessageContainer = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const Verification = () => {
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [message, setMessage] = useState('Verifying your email...');
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!token) {
        setVerificationStatus('error');
        setMessage('No verification token found. Please check your email for the verification link.');
        return;
      }

      try {
        await verifyEmail(token);
        setVerificationStatus('success');
        setMessage('Your email has been successfully verified. You can now log in.');
        setTimeout(() => navigate('/'), 3000);
      } catch (error) {
        setVerificationStatus('error');
        setMessage('Email verification failed. Please try again or contact support.');
        console.error('Verification failed:', error.response?.data || error.message);
      }
    };

    verifyEmailToken();
  }, [token, navigate]);

  return (
    <Layout>
      <ContentContainer>
        <MessageContainer>
          <h2>Email Verification</h2>
          <p>{message}</p>
          {verificationStatus === 'success' && (
            <p>Redirecting to login page...</p>
          )}
          {verificationStatus === 'error' && (
            <button onClick={() => navigate('/')}>Return to Sign Up</button>
          )}
        </MessageContainer>
      </ContentContainer>
    </Layout>
  );
};

export default Verification;