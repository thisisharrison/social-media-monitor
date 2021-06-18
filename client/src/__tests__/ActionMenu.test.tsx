import React from "react";
import { screen, act } from "@testing-library/react";
import { render } from "../setupTests";
import userEvent from "@testing-library/user-event";

import { ActionMenu } from "../ActionMenu/ActionMenu";

describe("<ActionMenu />", () => {
  test("is rendering initial state", () => {
    render(<ActionMenu />);
    expect(
      screen.getByRole("button", { name: /all medium selected/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /last 24 hours/i })
    ).not.toHaveClass("selected");
    expect(
      screen.getByRole("button", { name: /last 7 days/i })
    ).not.toHaveClass("selected");
    expect(
      screen.getByRole("button", { name: /last 30 days/i })
    ).not.toHaveClass("selected");
    expect(
      screen.getByRole("button", { name: /clients/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sort by/i })).toHaveTextContent(
      /sort by/i
    );
  });
});
