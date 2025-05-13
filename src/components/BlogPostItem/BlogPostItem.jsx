// BlogPostItem.jsx
import React from "react";
import styles from "./BlogPostItem.module.css";

const BlogPostItem = ({ id, title, summary, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.blogPostItem}>
      {/* Remove Link and just show title */}
      <div className={styles.postTitle}>
        <h2>{title}</h2>
      </div>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
};

export default BlogPostItem;
