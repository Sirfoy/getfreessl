import { useContext } from "react";
import { AppContext } from "@/contexts";
import { client } from "../client";
import { useErrorHandler } from "@/utilities";

export const useMailSsl = () => {
  const { email, validation, updateAppData } = useContext(AppContext);
  const errorHandler = useErrorHandler();

  return async () => {
    if (!validation) return;

    updateAppData({ loading: true });

    try {
      await client().post(`/mail/${validation?.uuid}`, { email });
      const newValidation = { ...(validation ?? {}), is_mailed: true };
      updateAppData({ loading: false, validation: newValidation });
      window.scrollTo(0, 0);
    } catch (error) {
      errorHandler(error);
    }
  };
};
