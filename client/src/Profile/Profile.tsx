import React from "react";
import moment from "moment";
import { useQueryContext } from "../context/QueryContext";
import { useWorkspace } from "../context/WorkspaceContext";
import { ProfileSection, DropdownButton, DropdownItem } from "./styles";

export const Profile = () => {
  const { query, dispatch } = useQueryContext();
  const [keyword, setKeyword] = React.useState<string>("");
  const { workspace } = useWorkspace();

  const handleKeyword = (event: React.FormEvent<HTMLInputElement>): void => {
    setKeyword(event.currentTarget.value);
  };

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch({ type: "FILTER BY KEYWORD", keyword });
  };

  const handleSelect = (event: string) => {
    if (event === query.client) {
      dispatch({ type: "FILTER BY CLIENT", client: null });
    } else {
      dispatch({ type: "FILTER BY CLIENT", client: event });
    }
  };

  return (
    <ProfileSection>
      <div>
        <h2>{query.client ? query.client : "All Clients"}</h2>
        {query.dateMin ? (
          <small>
            Monitoring period:{" "}
            {moment.unix(query.dateMin).format("MMM D[, ]YYYY")} -{" "}
            {moment().format("MMM D[, ]YYYY")}
          </small>
        ) : (
          <small>All Time</small>
        )}
        <ul>
          <li>OVERVIEW</li>
          <li className="active">POSTS</li>
        </ul>
      </div>
      <div className="client-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search here"
            value={keyword}
            onChange={handleKeyword}
          />
        </form>
        <DropdownButton
          id="client-dropdown"
          title={query.client ? query.client : "Clients"}
          onSelect={handleSelect}
        >
          {workspace.clients.map((client) => {
            return (
              <DropdownItem key={client.id} eventKey={client.name}>
                {client.name}
              </DropdownItem>
            );
          })}
        </DropdownButton>
      </div>
    </ProfileSection>
  );
};
