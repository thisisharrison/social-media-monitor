import React from "react";
import { Profile } from "../Profile/Profile";
import Dropdown from "react-bootstrap/Dropdown";
import {
  ButtonGroup,
  Button,
  DropdownButton,
  SortFilter,
} from "./ActionButtons";

export const ActionMenu = () => {
  return (
    <div>
      <Profile />
      <SortFilter>
        <div className="top-row">
          <DropdownButton title="Sort By">
            <Dropdown.Item as="button">Date</Dropdown.Item>
            <Dropdown.Item as="button">Comment Count</Dropdown.Item>
          </DropdownButton>
          <DropdownButton disabled title="All post types" />
          <DropdownButton title="All medium selected">
            <Dropdown.Item as="button">Facebook</Dropdown.Item>
            <Dropdown.Item as="button">HK01</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="bottom-row">
          <ButtonGroup aria-label="post times">
            <Button>Last 24 Hours</Button>
            <Button className="selected">Last 7 days</Button>
            <Button>Last 30 days</Button>
          </ButtonGroup>
          <DropdownButton disabled title="Custom" />
        </div>
      </SortFilter>
    </div>
  );
};
