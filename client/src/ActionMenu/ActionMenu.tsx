import React from "react";
import moment from "moment";
import { usePostCache } from "../context/PostCacheContext";
import { useQueryContext } from "../context/QueryContext";
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
  const { posts } = usePostCache();
  const [ dateFilter, setDateFilter ] = React.useState<string | null>(null);

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
      setDateFilter(null)
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
      <pre>{JSON.stringify(query)}</pre>
      <pre>{JSON.stringify(posts)}</pre>
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
            {[
              "Facebook",
              "Instagram",
              "HK01",
              "Twitter",
              "Weibo",
              "BuzzFeed",
              "WeChat",
              "Line",
              "LinkedIn",
            ].map((mediumType) => {
              return (
                <Dropdown.Item
                  key={mediumType}
                  as="button"
                  data-filter={mediumType}
                  onClick={handleMediumFilter}
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
