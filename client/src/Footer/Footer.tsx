import React from "react";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";

const StickyFooter = styled.div``;

export const Footer = () => {
  return (
    <StickyFooter className="text-center">
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </StickyFooter>
  );
};
