// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://script.google.com/macros/s/AKfycbywmzh4FYUaNRnv3yNlbS-k_1e-ra5r4EN19q9tMITG3aPTXA1OyQTcaAsuu4EixARn/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
