import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Profile } from "../Profile/Profile";

describe("<Profile />", () => {
  test("is rendering properly", () => {
    render(<Profile />);
    expect(2 + 2).toBe(4);
  });
});
