import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../setupTests";
import userEvent from "@testing-library/user-event";

import App from "../App/App";

describe("<App />", () => {
  test("is rendering initial state", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /all clients/i })
    ).toBeInTheDocument();
  });
});
