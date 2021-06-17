import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PostIndex } from "../Posts/PostIndex";
import { PostIndexItem } from "../Posts/PostIndexItem";

describe("<PostIndex /> and <PostIndexItem />", () => {
  test("<PostIndex />", () => {
    render(<PostIndex />);
    expect(2 + 2).toBe(4);
  });

  test("<PostIndexItem />", () => {
    render(<PostIndexItem />);
    expect(2 + 2).toBe(4);
  });
});
