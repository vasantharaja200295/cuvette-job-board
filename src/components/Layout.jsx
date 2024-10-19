import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
  </LayoutContainer>
);

export default Layout;