import api from "./api";

export const getPartai = async () => {
  const res = await api.get("api?action=partai");
  return res.data;
};
