import {
  Dropdown as btsDropdown,
  DropdownButton as btsDropdownButton,
} from "react-bootstrap";
import styled from "styled-components";

export const ProfileSection = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #3f506b;
  height: 20%;
  padding: 1.5rem 1rem 0 1rem;
  h2 {
    color: white;
  }
  small {
    color: grey;
  }
  ul {
    cursor: pointer;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    padding: 0;
    color: #6d7f9e;
    li {
      margin-right: 2rem;
      &.active {
        color: white;
        border-bottom: 4px solid white;
      }
    }
  }
  input {
    border: 0;
    background-color: #717a93;
    margin-right: 1rem;
    height: 2rem;
    &::placeholder {
      color: #a9b1c0;
      opacity: 1;
    }
  }
  .client-search {
    display: flex;
    flex: wrap-row;
  }
`;

export const DropdownButton = styled(btsDropdownButton)`
  button {
    background-color: #717a93;
    border: 0;
    color: #f4f4f6;
    height: 2rem;
    line-height: 1rem;
    &:hover,
    &:active,
    &:focus {
      background-color: #717a93;
    }
  }
`;

export const DropdownItem = styled(btsDropdown.Item)``;
