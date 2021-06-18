import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../setupTests";
import userEvent from "@testing-library/user-event";

import { Profile } from "../Profile/Profile";

describe("<Profile />", () => {
  test("is rendering initial state", () => {
    render(<Profile />);
    expect(screen.getByRole("textbox")).toHaveDisplayValue("");
    expect(screen.getByText(/all clients/i)).toBeInTheDocument();
  });
});
