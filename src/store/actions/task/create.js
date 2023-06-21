import { useContext } from "react";
import { AppContext } from "@/contexts";
import { client } from "../client";
import { useVerifyTask } from "./verify";

export const useCreateTask = () => {
  const { domain, type, updateAppData } = useContext(AppContext);
  const verifyTask = useVerifyTask();

  return async () => {
    updateAppData({ loading: true });

    try {
      const { data } = await client().post("/initiate", { domain, type });

      if (data?.task_id) {
        let counter = 0;

        while (counter < 4) {
          const validation = await verifyTask(data?.task_id);

          if (validation) {
            updateAppData({
              loading: false,
              task_id: data?.task_id,
              validation,
            });
            counter = 4;
          }
          counter += 1;
          await new Promise((r) => setTimeout(r, 1500));
        }
      }
    } catch (error) {
      console.log(error);
      updateAppData({ loading: false });
    }
  };
};
