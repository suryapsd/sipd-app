import api from "./api";

export const getDprd = async () => {
  const res = await api.get("api?action=dprd");
  return res.data;
};
