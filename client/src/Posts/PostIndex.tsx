import React from "react";
import { PostIndexItem } from "./PostIndexItem";
import { usePostCache } from "../context/PostCacheContext";
import { PostSection } from "./styles";

export const PostIndex = () => {
  const { posts } = usePostCache();

  return (
    <PostSection>
      <div className="post-index-header">
        <p>Total records: {posts.length}</p>
        <p>Sentiment</p>
        <p>Impact</p>
      </div>
      {posts.map((post) => (
        <PostIndexItem key={post.id} post={post} />
      ))}
    </PostSection>
  );
};
