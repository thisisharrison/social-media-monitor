import React from "react";
import moment from "moment";
import { useQueryContext } from "../context/QueryContext";
import { useWorkspace } from "../context/WorkspaceContext";
import { Profile } from "../Profile/Profile";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownItemProps } from "react-bootstrap/DropdownItem";
import {
  ButtonGroup,
  Button,
  DropdownButton,
  SortFilter,
} from "./ActionButtons";

export const ActionMenu = () => {
  const { query, dispatch } = useQueryContext();
  const { workspace } = useWorkspace();
  const [dateFilter, setDateFilter] = React.useState<string | null>(null);

  React.useEffect(() => {
    let queryDate = query.dateMin;
    if (queryDate) {
      let days = (moment().unix() - queryDate) / 60 / 60 / 24;
      if (days < 2) setDateFilter("24hrs");
      else if (days < 8) setDateFilter("7days");
      else if (days < 31) setDateFilter("30days");
      else {
        setDateFilter(null);
      }
    }
  }, [query, setDateFilter]);

  const handleSorting = (event: React.MouseEvent<DropdownItemProps>) => {
    const button = event.currentTarget as HTMLButtonElement;
    const sortBy = button.getAttribute("data-filter") || "";
    if (sortBy === query.sortBy) {
      dispatch({ type: "SORT BY", sortBy: null });
    } else {
      dispatch({ type: "SORT BY", sortBy });
    }
  };

  const handleFilter = (event: React.MouseEvent<DropdownItemProps>) => {
    const button = event.currentTarget as HTMLButtonElement;
    const field = button.getAttribute("data-filter") || "";
    if (field === dateFilter) {
      setDateFilter(null);
      dispatch({ type: "FILTER BY DATE", dateMin: null });
    } else {
      setDateFilter(field);
      let dateMin: number = moment().unix();
      switch (field) {
        case "24hrs":
          dateMin = moment().subtract(1, "days").unix();
          break;
        case "7days":
          dateMin = moment().subtract(7, "days").unix();
          break;
        case "30days":
          dateMin = moment().subtract(30, "days").unix();
          break;
        default:
          break;
      }
      dispatch({ type: "FILTER BY DATE", dateMin });
    }
  };

  const handleMediumFilter = (event: React.MouseEvent<DropdownItemProps>) => {
    const button = event.currentTarget as HTMLButtonElement;
    const medium = button.getAttribute("data-filter") || "";
    if (medium === query.medium) {
      dispatch({ type: "FILTER BY MEDIUM", medium: null });
    } else {
      dispatch({ type: "FILTER BY MEDIUM", medium });
    }
  };

  return (
    <div>
      <Profile />
      <SortFilter>
        <div className="top-row">
          <DropdownButton title={`Sort by ${query.sortBy ? query.sortBy : ""}`}>
            {["date", "comment"].map((sortType: string) => {
              return (
                <Dropdown.Item
                  key={sortType}
                  as="button"
                  data-filter={sortType}
                  onClick={handleSorting}
                  active={query.sortBy === sortType ? true : false}
                >
                  {sortType.charAt(0).toUpperCase() + sortType.slice(1)}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <DropdownButton disabled title="All post types" />
          <DropdownButton
            title={
              query.medium ? `All ${query.medium} posts` : `All medium selected`
            }
          >
            {workspace.medium.map((mediumType) => {
              return (
                <Dropdown.Item
                  key={mediumType}
                  as="button"
                  data-filter={mediumType}
                  onClick={handleMediumFilter}
                  active={query.medium === mediumType ? true : false}
                >
                  {mediumType}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>
        <div className="bottom-row">
          <ButtonGroup aria-label="post times">
            {["24hrs", "7days", "30days"].map((dateType) => {
              return (
                <Button
                  key={dateType}
                  data-filter={dateType}
                  onClick={handleFilter}
                  className={dateFilter === dateType ? "selected" : null}
                >
                  {dateType === "24hrs"
                    ? "Last 24 hours"
                    : dateType === "7days"
                    ? "Last 7 days"
                    : dateType === "30days"
                    ? "Last 30 days"
                    : null}
                </Button>
              );
            })}
          </ButtonGroup>
          <DropdownButton disabled title="Custom" />
        </div>
      </SortFilter>
    </div>
  );
};
