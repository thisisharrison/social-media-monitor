import React from "react";
import { fetchPosts } from "../api";
import {
  PostCacheProvider,
  usePostCache,
  PostType,
} from "../context/PostCacheContext";
import { QueryProvider, useQueryContext } from "../context/QueryContext";
import { WorkspaceProvider, useWorkspace } from "../context/WorkspaceContext";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { ActionMenu } from "../ActionMenu/ActionMenu";
import { PostIndex } from "../Posts/PostIndex";

import Main from "./styles";

function App() {
  return (
    <WorkspaceProvider>
      <PostCacheProvider>
        <QueryProvider>
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

  React.useEffect(() => {
    let queryString = Object.keys(query)
      .map((key) => {
        if (!query[key]) return "";
        return `${key}=${query[key]}&`;
      })
      .join("");
    console.log(queryString);
    fetchPosts(queryString).then((data: Array<PostType>) => {
      setPosts(data);
    });
  }, [query, setPosts]);

  return (
    <>
      <ActionMenu />
      <PostIndex />
    </>
  );
}

// To-do: Pagination in Footer

export default App;
