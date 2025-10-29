import api from "./api";

export const getPartai = async () => {
  const res = await api.get("exec?action=partai");
  return res.data;
};
