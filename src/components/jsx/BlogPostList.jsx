import React from "react";
import styles from "../css/BlogPostList.module.css";
import BlogPostItem from "./BlogPostItem";

function BlogPostList({ posts }) {
  return (
    <div className={styles.blogPostList}>
      {posts.map((post) => (
        <BlogPostItem
          key={post.id}
          id={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          url={post.url}
        />
      ))}
    </div>
  );
}

export default BlogPostList;
