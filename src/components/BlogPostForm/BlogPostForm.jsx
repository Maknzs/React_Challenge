import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import SunEditor from "suneditor-react";
import "react-datepicker/dist/react-datepicker.css";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./BlogPostForm.module.css";

const BlogPostForm = ({ post = {}, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [date, setDate] = useState(post?.date || "");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Required";
    if (!content.trim()) newErrors.content = "Required";
    if (!author.trim()) newErrors.author = "Required";
    if (!date) newErrors.date = "Required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage("");
    } else {
      setIsSubmitting(true);
      await onSubmit({ title, content, author, date });
      setIsSubmitting(false);
      setSuccessMessage("Post Created Successfully");

      if (!post || Object.keys(post).length === 0) {
        setTitle("");
        setContent("");
        setAuthor("");
        setDate("");
        setErrors({});
      }
    }
  };

  return (
    <form className={styles.blogPostForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.title}>
          Title
        </label>
        <input
          className={styles.input}
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-describedby="title-error"
        />
        {errors.title && <p className={styles.error}>Title {errors.title}</p>}
        <label htmlFor="content" className={styles.title}>
          Content
        </label>
        <SunEditor
          name="content"
          setContents={content}
          onChange={setContent}
          setOptions={{
            height: 200,
            buttonList: [
              ["formatBlock", "bold", "italic"],
              ["list", "indent", "outdent"],
              ["undo", "redo", "removeFormat"],
            ],
          }}
        />
        {errors.content && (
          <p className={styles.error}>Content {errors.content}</p>
        )}
        <label htmlFor="author" className={styles.title}>
          Author
        </label>
        <input
          className={styles.input}
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          aria-describedby="input-error"
        />
        {errors.author && (
          <p className={styles.error}>Author {errors.author}</p>
        )}
        <label htmlFor="date" className={styles.title}>
          Date
        </label>
        <ReactDatePicker
          id="date"
          selected={date ? new Date(date) : null}
          onChange={(date) => setDate(date.toISOString())}
        />
        {errors.date && <p className={styles.error}>Date {errors.date}</p>}
      </div>
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting
          ? "Submitting..."
          : post?.title
          ? "Update Post"
          : "Create Post"}
      </button>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </form>
  );
};

export default BlogPostForm;
