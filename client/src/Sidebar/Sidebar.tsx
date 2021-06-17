import React from "react";
import styled from "styled-components";

const SideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 70px;
  margin: 0px;
  background-color: #1e2734;
  color: white;
`;

export const Sidebar = () => {
  return <SideNav>Side</SideNav>;
};
