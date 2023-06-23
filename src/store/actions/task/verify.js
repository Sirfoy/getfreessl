import { client } from "../client";
import { useErrorHandler } from "@/utilities";

export const useVerifyTask = () => {
  const errorHandler = useErrorHandler();
  return async (task_id) => {
    try {
      const { data } = await client().get(`/tasks/${task_id}`);
      if (data?.task_result?.domain) return data?.task_result;
      return null;
    } catch (error) {
      errorHandler(error);
    }
  };
};
