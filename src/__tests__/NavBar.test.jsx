import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

describe("NavBar", () => {
  const renderWithRouter = (ui, route = "/") =>
    render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);

  it("renders the logo and desktop links", () => {
    renderWithRouter(<NavBar />);
    expect(screen.getByText("Blog Application")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("New Post")).toBeInTheDocument();
  });

  it("toggles the mobile menu when hamburger is clicked", () => {
    renderWithRouter(<NavBar />);
    const hamburger = screen.getByLabelText("Toggle menu");
    fireEvent.click(hamburger);
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(within(mobileMenu).getByText("Home")).toBeInTheDocument();
    expect(within(mobileMenu).getByText("New Post")).toBeInTheDocument();
    fireEvent.click(hamburger);
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });

  it("toggles the hamburger and close icon correctly", () => {
    renderWithRouter(<NavBar />);
    const hamburger = screen.getByLabelText("Toggle menu");
    expect(hamburger.textContent).toBe("☰");
    fireEvent.click(hamburger);
    expect(hamburger.textContent).toBe("✕");
  });

  it("closes mobile menu on route change", () => {
    renderWithRouter(<NavBar />, "/posts/new");
    const hamburger = screen.getByLabelText("Toggle menu");
    fireEvent.click(hamburger);
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(within(mobileMenu).getByText("Home")).toBeInTheDocument();
    fireEvent.click(within(mobileMenu).getByText("Home"));
    expect(screen.getByLabelText("Toggle menu").textContent).toBe("☰");
  });
});
