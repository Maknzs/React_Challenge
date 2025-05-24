// src/__tests__/ConfirmationDialog.test.jsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmationDialog from "../components/ConfirmationDialog/ConfirmationDialog";

describe("ConfirmationDialog", () => {
  const setup = (props = {}) => {
    const defaultProps = {
      isOpen: true,
      onClose: jest.fn(),
      onConfirm: jest.fn(),
      ...props,
    };

    render(<ConfirmationDialog {...defaultProps} />);
    return defaultProps;
  };

  it("does not render when isOpen is false", () => {
    render(
      <ConfirmationDialog
        isOpen={false}
        onClose={() => {}}
        onConfirm={() => {}}
      />
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders dialog with title and description", () => {
    setup();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/confirm deletion/i)).toBeInTheDocument();
    expect(
      screen.getByText(/are you sure you want to delete this post/i)
    ).toBeInTheDocument();
  });

  it("calls onClose when Cancel is clicked", () => {
    const { onClose } = setup();
    fireEvent.click(screen.getByText(/cancel/i));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when Delete is clicked", () => {
    const { onConfirm } = setup();
    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clicking outside the dialog", () => {
    const { onClose } = setup();
    fireEvent.click(screen.getByTestId("overlay"));
    expect(onClose).toHaveBeenCalled();
  });

  it("traps focus on dialog when opened", () => {
    setup();
    const dialog = screen.getByRole("dialog");
    expect(document.activeElement).toBe(dialog);
  });
});
