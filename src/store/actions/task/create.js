import { useContext } from "react";
import { AppContext } from "@/contexts";
import { useErrorHandler } from "@/utilities";
import { client } from "../client";
import { useVerifyTask } from "./verify";

export const useCreateTask = () => {
  const { domain, type, updateAppData } = useContext(AppContext);
  const verifyTask = useVerifyTask();
  const errorHandler = useErrorHandler();

  return async () => {
    updateAppData({ loading: true });

    try {
      const { data } = await client().post("/initiate", { domain, type });

      if (data?.task_id) {
        let counter = 0;

        while (counter < 5) {
          const validation = await verifyTask(data?.task_id);

          if (validation) {
            counter = 4;
            return updateAppData({
              loading: false,
              task_id: data?.task_id,
              validation,
            });
          }
          counter += 1;
          await new Promise((r) => setTimeout(r, 2000));
        }

        updateAppData({
          loading: false,
          task_id: data?.task_id,
          validation: { is_polling: true },
        });
      }
    } catch (error) {
      errorHandler(error);
    }
  };
};
