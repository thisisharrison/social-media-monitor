import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../setupTests";
import userEvent from "@testing-library/user-event";

import { PostIndex } from "../Posts/PostIndex";
import { PostIndexItem } from "../Posts/PostIndexItem";

describe("<PostIndex /> and <PostIndexItem />", () => {
  test("<PostIndex />", () => {
    render(<PostIndex />);
    expect(screen.getByText(/total records:/i)).toHaveTextContent("0");
    expect(screen.getByText(/sentiment/i)).toBeInTheDocument();
    expect(screen.getByText(/impact/i)).toBeInTheDocument();
  });

  test("<PostIndexItem />", () => {});
});
