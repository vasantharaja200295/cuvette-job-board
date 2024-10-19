import React, { useState } from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const OTPVerification = ({ onVerify }) => {
  const [emailOTP, setEmailOTP] = useState('');
  const [mobileOTP, setMobileOTP] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify({ emailOTP, mobileOTP });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Email OTP"
        value={emailOTP}
        onChange={(e) => setEmailOTP(e.target.value)}
        required
      />
      <Button type="submit">Verify</Button>
      <Input
        type="text"
        placeholder="Mobile OTP"
        value={mobileOTP}
        onChange={(e) => setMobileOTP(e.target.value)}
        required
      />
      <Button type="submit">Verify</Button>
    </Form>
  );
};

export default OTPVerification;

