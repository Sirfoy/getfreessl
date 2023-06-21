import { client } from "../client";

export const useVerifyTask = () => {
  return async (task_id) => {
    try {
      const { data } = await client().get(`/tasks/${task_id}`);
      if (data?.task_result?.domain) return data?.task_result;
      return null;
    } catch (error) {
      console.log(error);
    }
  };
};