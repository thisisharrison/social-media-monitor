import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import querystring from "querystring";
import { fetchPosts } from "../api";
import {
  PostCacheProvider,
  usePostCache,
  PostType,
} from "../context/PostCacheContext";
import { QueryProvider, useQueryContext } from "../context/QueryContext";
import { WorkspaceProvider } from "../context/WorkspaceContext";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { ActionMenu } from "../ActionMenu/ActionMenu";
import { PostIndex } from "../Posts/PostIndex";

import Main from "./styles";

function App() {
  let location = useLocation();
  let initialQuery = querystring.parse(location.search.substring(1));

  return (
    <WorkspaceProvider>
      <PostCacheProvider>
        <QueryProvider initialQuery={initialQuery}>
          <Main>
            <div>
              <Sidebar />
            </div>
            <div>
              <Header />
              <Dashboard />
            </div>
          </Main>
        </QueryProvider>
      </PostCacheProvider>
    </WorkspaceProvider>
  );
}

function Dashboard() {
  const { setPosts } = usePostCache();
  const { query } = useQueryContext();
  let history = useHistory();

  React.useEffect(() => {
    let queryString = Object.keys(query)
      .map((key) => {
        if (!query[key]) return "";
        return `${key}=${query[key]}&`;
      })
      .join("");
    fetchPosts(queryString).then((data: Array<PostType>) => {
      setPosts(data);
    });
    history.push("?" + queryString);
  }, [history, query, setPosts]);

  return (
    <>
      <ActionMenu />
      <PostIndex />
    </>
  );
}

// To-do: Pagination in Footer

export default App;
