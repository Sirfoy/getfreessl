import { useContext } from "react";
import { AppContext, initialAppData } from "../contexts";

export const useErrorHandler = () => {
  const { domain, updateAppData } = useContext(AppContext);

  return (axiosError) => {
    let errorCode = "";
    if (axiosError?.response?.data) {
      errorCode = axiosError?.response?.data?.error;
    }

    let error = "";

    switch (errorCode) {
      case "validation-002":
        error = `Too many failed verifications for ${domain}. Try again in an hour's time.`;
        break;
      case "validation-003":
        error = `An SSL Certificate has been generated in the last 30 days for ${domain}.`;
        break;
      case "validation-005":
        error = `There was a problem verifying the domain.`;
        break;
      default:
        error = "There was a problem carrying out that operation.";
    }

    window.scrollTo(0, 0);
    updateAppData({ ...initialAppData, error });
  };
};
