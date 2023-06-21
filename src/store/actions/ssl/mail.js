import { useContext } from "react";
import { AppContext } from "@/contexts";
import { client } from "../client";

export const useMailSsl = () => {
  const { email, validation, updateAppData } = useContext(AppContext);

  return async () => {
    if (!validation) return;

    updateAppData({ loading: true });

    try {
      await client().post(`/mail/${validation?.uuid}`, { email });
      const newValidation = { ...(validation ?? {}), is_mailed: true };
      updateAppData({ loading: false, validation: newValidation });
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
      updateAppData({ loading: false });
    }
  };
};