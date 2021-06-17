import React from "react";

export interface PostType {
  id: string;
  author: string;
  img: string;
  client: string;
  media: string;
  date: string;
  post: string;
  sentiment: string;
  impact: number;
  data: DataType & { [key: string]: number };
}

interface DataType {
  likes: number;
  comments: number;
  laughs: number;
  cries: number;
  surprises: number;
  angry: number;
}

export interface PostContextInterface {
  posts: Array<PostType>;
  setPosts: (data: Array<PostType>) => undefined;
}

const PostCacheContext = React.createContext<PostContextInterface | null>(null);

function PostCacheProvider(props: any) {
  const [posts, setPosts] = React.useState([]);
  return <PostCacheContext.Provider value={{ posts, setPosts }} {...props} />;
}

function usePostCache() {
  const context = React.useContext(PostCacheContext);
  if (!context) {
    throw new Error(`usePostCache must be used inside PostCacheProvider`);
  }
  return context;
}

export { PostCacheContext, PostCacheProvider, usePostCache };
