import React from "react";
import { fetchWorkspace } from "../api";

interface IClient {
  id: string;
  name: string;
}

type WorkspaceType = {
  clients: IClient[];
  medium: Array<string>;
};

interface IWorkspaceContext {
  workspace: WorkspaceType;
  setWorkspace: (data: WorkspaceType) => undefined;
}

const WorkspaceContext = React.createContext<IWorkspaceContext | null>(null);

function WorkspaceProvider(props: any) {
  const [workspace, setWorkspace] = React.useState({ clients: [], medium: [] });
  return (
    <WorkspaceContext.Provider value={{ workspace, setWorkspace }} {...props} />
  );
}

function useWorkspace() {
  const context = React.useContext(WorkspaceContext);
  if (!context) {
    throw new Error(`useWorkspace must be used inside WorkspaceProvider`);
  }
  const { setWorkspace } = context;
  React.useEffect(() => {
    console.log("API!!!!!");
    fetchWorkspace().then((data: WorkspaceType) => setWorkspace(data));
  }, [setWorkspace]);
  return context;
}

export { WorkspaceContext, WorkspaceProvider, useWorkspace };
