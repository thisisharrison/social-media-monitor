import React from "react";
import fetchPosts from "../api";
import { PostCacheProvider, usePostCache } from "../context/PostCacheContext";
import { ActionProvider } from "../context/ActionContext";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { ActionMenu } from "../ActionMenu/ActionMenu";
import { PostIndex } from "../Posts/PostIndex";
import { Footer } from "../Footer/Footer";

import Main from "./styles";

function App() {
  return (
    <PostCacheProvider>
      <ActionProvider>
        <Main>
          <div>
            <Sidebar />
          </div>
          <div>
            <Header />
            <Dashboard />
          </div>
        </Main>
      </ActionProvider>
    </PostCacheProvider>
  );
}

function Dashboard() {
  const context = usePostCache();
  const { setPosts } = context;

  React.useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, [setPosts]);

  return (
    <>
      <ActionMenu />
      <PostIndex />
    </>
  );
}

// To-do: Pagination in Footer

export default App;
