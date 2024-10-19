import React, { useState } from 'react';
import Layout from '../components/Layout';
import SignUpForm from '../components/SignUpForm';
import styled from '@emotion/styled';
import { register } from '../services/api';
import Login from '../components/Login';



const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const FormContainer = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 0.5rem;
  color: #0066ff;
  background-color: transparent;
  text-align: center;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2px;
`;


const SignUp = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleSignUp = async (formData) => {
        try {
          const response = await register(formData);
          console.log('Sign up successful:', response.data);
          alert('Registration successful! Please check your email for a verification link.');
        } catch (error) {
          console.error('Sign up failed:', error.response?.data || error.message);
          alert('Sign up failed. Please try again.');
        }
      };
      


  return (
    <Layout>
      <ContentContainer>
        <TextContent>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </TextContent>
        <FormContainer>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <p>Lorem Ipsum is simply dummy text</p>
          {isLogin ? <Login /> : <SignUpForm onSubmit={handleSignUp} />}
          <Button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </Button>
        </FormContainer>
      </ContentContainer>
    </Layout>
  );
};

export default SignUp;