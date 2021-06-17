import React from "react";
import { Navbar as btsNavbar } from "react-bootstrap";
import styled from "styled-components";

const Navbar = styled(btsNavbar)`
  background-color: #f6f6f9;
  color: #565657;
  height: 50px;
  padding: 1rem;
  font-weight: 700;
`;
export const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      FEED
    </Navbar>
  );
};
