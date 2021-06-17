import React from "react";
import { PostIndexItem } from "./PostIndexItem";
import { usePostCache, PostType } from "../context/PostCacheContext";
import { PostSection } from "./styles";

interface PostIndexProps {
  posts: Array<PostType>;
}

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
