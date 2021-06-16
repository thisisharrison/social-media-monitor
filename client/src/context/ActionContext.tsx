import React from "react";

const initialState = {
  sortBy: { field: null, dir: "desc" },
  siteFilter: null,
  dateRange: { min: -Infinity, max: Infinity },
  keyword: null,
};

type ACTIONTYPE =
  | { type: "SORT BY"; field: string; dir: string }
  | { type: "SITE FILTER BY"; site: string }
  | { type: "DATE RANGE FILTER BY"; min: number; max: number }
  | { type: "KEYWORD"; keyword: string };

function actionReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "SORT BY":
      return Object.assign(state, {
        sortBy: { field: action.field, dir: action.dir },
      });
    case "SITE FILTER BY":
      return Object.assign(state, { siteFilter: action.site });
    case "DATE RANGE FILTER BY":
      return Object.assign(state, {
        dateRange: { min: action.min, max: action.max },
      });
    case "KEYWORD":
      return Object.assign(state, { keyword: action.keyword });
    default:
      throw new Error(`Unhandled action type`);
  }
}

interface ActionContextInterface {
  state: typeof initialState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

const ActionContext = React.createContext<ActionContextInterface>({
  state: initialState,
  dispatch: () => initialState,
});

function ActionProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(actionReducer, initialState);
  return <ActionContext.Provider value={{ state, dispatch }} {...props} />;
}

function useActionContext() {
  const context = React.useContext(ActionContext);
  if (!context) {
    throw new Error(
      `useActionContext must be used inside ActionContextProvider`
    );
  }
  return context;
}

export { ActionContext, ActionProvider, useActionContext };
