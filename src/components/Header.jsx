import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #333;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff3b30;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page
    navigate("/");
  };

  useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    <ContactLink href="#">Contact</ContactLink>
    {isLoggedIn && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
    </div>
    </HeaderContainer>
  );
};

export default Header;
