import React from "react";
import Comment from "../Comment/Comment";
import styles from "./CommentList.module.css";

const CommentList = ({ postComments }) => {
  if (!postComments || postComments.length === 0) {
    return (
      <p className={styles.noComments}>No comments on this blog post yet.</p>
    );
  }

  return (
    <div className={styles.commentList} aria-live="polite">
      {postComments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          date={comment.date}
          text={comment.text}
          avatar={comment.avatar}
        />
      ))}
    </div>
  );
};

export default CommentList;
