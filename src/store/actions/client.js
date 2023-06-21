import axios from "axios";

export const client = () => {
  const headers = {
    "Content-Type": "application/json",
    Accepts: "application/json",
  };

  return axios.create({
    baseURL: String(process.env.NEXT_PUBLIC_GFSSL_API),
    headers,
  });
};
