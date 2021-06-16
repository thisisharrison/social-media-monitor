// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";
import { render as rtlrender, RenderOptions } from "@testing-library/react";
import { PostCacheProvider } from "./context/PostCacheContext";
import { ActionProvider } from "./context/ActionContext";

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <PostCacheProvider>
      <ActionProvider>{children}</ActionProvider>
    </PostCacheProvider>
  );
};

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => rtlrender(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { render };
