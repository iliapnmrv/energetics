import axios from "axios";

export const API_URL = "http://localhost:8001/";

const $api = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const $fileUploadApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default $api;
