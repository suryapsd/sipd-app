import api from "./api";

export const getDprd = async () => {
  const res = await api.get("exec?action=dprd");
  return res.data;
};
