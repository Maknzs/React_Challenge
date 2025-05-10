import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/BlogPostItem.module.css";

function BlogPostItem({ title, summary, date, url }) {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className={styles.blogPostItem}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
}

export default BlogPostItem;
