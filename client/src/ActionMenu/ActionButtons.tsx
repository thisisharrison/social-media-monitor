import {
  Dropdown as btsDropdown,
  DropdownButton as btsDropdownButton,
  Button as btsButton,
  ButtonGroup as btsButtonGroup,
} from "react-bootstrap";
import styled from "styled-components";

export const DropdownButton = styled(btsDropdownButton)`
  button {
    background-color: #fff;
    border-color: #d4d4d4;
    color: #3f506b;
    &:hover,
    &:active,
    &:focus {
      background-color: #fff;
      color: #3f506b;
      border-color: #3f506b;
    }
    &:disabled {
      background-color: grey;
      border-color: #d4d4d4;
    }
  }
`;

export const DropdownItem = styled(btsDropdown.Item)``;

export const Button = styled(btsButton)`
  background-color: #fff;
  border-color: #d4d4d4;
  color: #3f506b;
  &:hover,
  &:active,
  &:focus {
    background-color: #fff;
    color: #3f506b;
    border-color: #3f506b;
  }
  &.selected {
    background-color: #1fc9cd;
    border-color: #1fc9cd;
    color: white;
    &:hover {
      background-color: #1fc9cd;
      border-color: #1fc9cd;
      color: white;
    }
  }
`;

export const ButtonGroup = styled(btsButtonGroup)`
  button {
    &:active {
      background-color: #1fc9cd;
      border-color: #1fc9cd;
      color: white;
    }
  }
`;

export const SortFilter = styled.div`
  padding: 1rem;
  .top-row {
    display: flex;
    flex: wrap-row;
    margin-bottom: 0.7rem;
    button {
      margin-right: 1rem;
    }
  }
  .bottom-row {
    display: flex;
    flex: wrap-row;
    margin-bottom: 0.7rem;
    div {
      margin-right: 1rem;
    }
  }
`;
