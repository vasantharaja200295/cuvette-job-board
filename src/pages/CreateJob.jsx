// src/pages/CreateJob.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { createJob } from '../services/api';
import styled from '@emotion/styled';

const CreateJobContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CreateJob = () => {
    const navigate = useNavigate();
    const [jobData, setJobData] = useState({
      title: '',
      description: '',
      experienceLevel: '',
      endDate: '',
      candidates: ''
    });
  
    const handleChange = (e) => {
      setJobData({ ...jobData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // No need to modify jobData here, the backend will handle the candidates string
        await createJob(jobData);
        alert('Job created successfully!');
        navigate('/dashboard');
      } catch (error) {
        console.error('Failed to create job:', error);
        alert('Failed to create job. Please try again.');
      }
    };
  
    return (
      <Layout>
        <CreateJobContainer>
          <h1>Create New Job</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              name="title"
              value={jobData.title}
              onChange={handleChange}
              placeholder="Job Title"
              required
            />
            <TextArea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              placeholder="Job Description"
              required
            />
            <Select
              name="experienceLevel"
              value={jobData.experienceLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select Experience Level</option>
              <option value="Entry">Entry</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Senior">Senior</option>
            </Select>
            <Input
              type="date"
              name="endDate"
              value={jobData.endDate}
              onChange={handleChange}
              required
            />
            <TextArea
              name="candidates"
              value={jobData.candidates}
              onChange={handleChange}
              placeholder="Candidate Emails (comma-separated)"
              required
            />
            <Button type="submit">Create Job</Button>
          </Form>
        </CreateJobContainer>
      </Layout>
    );
  };
  
  export default CreateJob;