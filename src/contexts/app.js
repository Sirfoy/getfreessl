import { createContext } from "react";

export const AppContext = createContext({});

export const initialAppData = {
  domain: "",
  email: "",
  step: 0,
  loading: false,
  type: null,
  task_id: null,
  validation: null,
  error: null,
};
