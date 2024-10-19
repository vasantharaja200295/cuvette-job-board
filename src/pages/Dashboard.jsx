// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllJobs } from '../services/api';
import styled from '@emotion/styled';

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const JobCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
`;

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      setJobs(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  return (
    <Layout>
      <DashboardContainer>
        <h1>Job Dashboard</h1>
        <Link to="/create-job">
          <Button>Create Job</Button>
        </Link>
        <JobList>
          {jobs.map((job) => (
            <JobCard key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>Experience Level: {job.experienceLevel}</p>
              <p>End Date: {new Date(job.endDate).toLocaleDateString()}</p>
            </JobCard>
          ))}
        </JobList>
      </DashboardContainer>
    </Layout>
  );
};

export default Dashboard;