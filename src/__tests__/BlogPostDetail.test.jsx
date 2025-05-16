import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPostDetail from "../components/BlogPostDetail/BlogPostDetail.jsx";

describe("BlogPostDetail", () => {
  const mockPost = {
    title: "Sample Blog Post",
    author: "Jane Doe",
    date: "04-10-2023",
    content: `
        <p>This is a <strong>sample<strong> blog post.</p>
        <h2>Section Title</h2>
        <ul>
            <li>Point One</li>
            <li>Point Two</li>
        </ul>
    `,
  };

  test("render title, author, date, and content", () => {
    render(<BlogPostDetail {...mockPost} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      mockPost.title
    );
    expect(screen.getByText(/By Jane Doe/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Published on April 10, 2023/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Sample Blog Post/i)).toBeInTheDocument();
    expect(screen.getByText(/Point One/i)).toBeInTheDocument();
    expect(screen.getByText(/Point Two/i)).toBeInTheDocument();
    expect(screen.queryByText(/Blog post not found/i)).not.toBeInTheDocument();
  });

  test("renders 'Blog post not founf' if any content is missing", () => {
    render(<BlogPostDetail title="" content="" author="" date="" />);
    expect(screen.getByText(/Blog post not found/i)).toBeInTheDocument();
  });

  test("renders formatted date correctly", () => {
    render(<BlogPostDetail {...mockPost} />);
    const dateElement = screen.getByText(/Published on/i);
    expect(dateElement).toHaveTextContent("April 10, 2023");
  });

  test("renders HTML content using dangerouslySetInnerHTML", () => {
    render(<BlogPostDetail {...mockPost} />);
    expect(screen.getByText("Point One")).toBeInTheDocument();
    expect(screen.getByText("Section Title")).toBeInTheDocument();
  });
});
