import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ActionMenu } from "../ActionMenu/ActionMenu";

describe("<ActionMenu />", () => {
  test("is rendering properly", () => {
    render(<ActionMenu />);
    expect(2 + 2).toBe(4);
  });
});
