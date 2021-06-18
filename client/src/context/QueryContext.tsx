import React from "react";

const defaultQueryState: State = {
  sortBy: null,
  medium: null,
  dateMin: null,
  keyword: null,
  client: null,
};

export interface State {
  [key: string]: any;
  sortBy?: string | null;
  medium?: string | null;
  dateMin?: number | null;
  keyword?: string | null;
  client?: string | null;
}

type ACTIONTYPE =
  | { type: "SORT BY"; sortBy: string | null }
  | { type: "FILTER BY MEDIUM"; medium: string | null }
  | { type: "FILTER BY DATE"; dateMin: number | null }
  | { type: "FILTER BY KEYWORD"; keyword: string | null }
  | { type: "FILTER BY CLIENT"; client: string | null };

function queryReducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "SORT BY":
      return { ...state, sortBy: action.sortBy };
    case "FILTER BY MEDIUM":
      return { ...state, medium: action.medium };
    case "FILTER BY DATE":
      return { ...state, dateMin: action.dateMin };
    case "FILTER BY KEYWORD":
      return { ...state, keyword: action.keyword };
    case "FILTER BY CLIENT":
      return { ...state, client: action.client };
    default:
      throw new Error(`Unhandled action type`);
  }
}

interface QueryContextInterface {
  query: State;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

const QueryContext = React.createContext<QueryContextInterface | null>(null);

function QueryProvider({ initialQuery = defaultQueryState, ...props }) {
  const [query, dispatch] = React.useReducer(queryReducer, initialQuery);
  return <QueryContext.Provider value={{ query, dispatch }} {...props} />;
}

function useQueryContext() {
  const context = React.useContext(QueryContext);
  if (!context) {
    throw new Error(`useQueryContext must be used inside QueryProvider`);
  }
  return context;
}

export { QueryContext, QueryProvider, useQueryContext, defaultQueryState };
