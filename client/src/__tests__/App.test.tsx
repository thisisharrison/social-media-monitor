import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App/App";

describe("<App />", () => {
  test("is rendering properly", () => {
    render(<App />);
    expect(2 + 2).toBe(4);
  });
});
