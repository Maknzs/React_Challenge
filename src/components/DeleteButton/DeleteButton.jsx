import React from "react";
import styles from "./DeleteButton.module.css";

const DeleteButton = ({ onClick, children }) => {
  return (
    <button className={styles.deleteButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default DeleteButton;
