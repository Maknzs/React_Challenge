import React, { useEffect, useRef } from "react";
import styles from "./ConfirmationDialog.module.css";

const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  children,
  message,
}) => {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    }
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        ref={dialogRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title">Confirm Deletion</h2>
        <p id="dialog-description">{message}</p>
        <div className={styles.buttons}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.deleteButton} onClick={onConfirm}>
            {children}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
