import React, { useState } from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

const Select = styled.select`
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

const JobPostingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    experienceLevel: '',
    candidates: '',
    endDate: '',
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
        name="title"
        placeholder="Enter Job Title"
        onChange={handleChange}
        required
      />
      <TextArea
        name="description"
        placeholder="Enter Job Description"
        onChange={handleChange}
        required
      />
      <Select
        name="experienceLevel"
        onChange={handleChange}
        required
      >
        <option value="">Select Experience Level</option>
        <option value="entry">Entry</option>
        <option value="intermediate">Intermediate</option>
        <option value="senior">Senior</option>
      </Select>
      <Input
        type="text"
        name="candidates"
        placeholder="Add Candidate (e.g., xyz@gmail.com)"
        onChange={handleChange}
      />
      <Input
        type="date"
        name="endDate"
        onChange={handleChange}
        required
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default JobPostingForm