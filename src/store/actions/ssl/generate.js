import { useContext } from "react";
import { client } from "../client";
import { AppContext } from "@/contexts";
import { useErrorHandler } from "@/utilities";

export const useGenerateSsl = () => {
  const { updateAppData, validation } = useContext(AppContext);
  const errorHandler = useErrorHandler();

  return async () => {
    if (!validation) return;

    updateAppData({ loading: true });

    try {
      const { data } = await client().post(`/generate/${validation?.uuid}`);

      if (data) {
        updateAppData({ validation: data, loading: false });
      }
    } catch (error) {
      errorHandler(error);
    }
  };
};
