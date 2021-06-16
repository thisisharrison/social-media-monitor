import React from "react";
import { ProfileSection, DropdownButton, DropdownItem } from "./styles";

export const Profile = () => {
  return (
    <ProfileSection>
      <div>
        <h2>Test Sony</h2>
        <small>Monitoring period: Date - Date</small>
        <ul>
          <li>OVERVIEW</li>
          <li className="active">POSTS</li>
        </ul>
      </div>
      <div className="client-search">
        <input type="text" placeholder="Search here" />
        <DropdownButton id="client-dropdown" title="Clients">
          <DropdownItem active eventKey="1">
            Test Sony
          </DropdownItem>
        </DropdownButton>
      </div>
    </ProfileSection>
  );
};
