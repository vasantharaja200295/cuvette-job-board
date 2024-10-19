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

const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    employeeSize: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        name="mobile"
        placeholder="Phone no."
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="companyName"
        placeholder="Company Name"
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Company Email"
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        name="employeeSize"
        placeholder="Employee Size"
        onChange={handleChange}
        required
      />
      <Button type="submit">Proceed</Button>
    </Form>
  );
};

export default SignUpForm;
