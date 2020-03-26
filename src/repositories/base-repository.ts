import axios from "axios";

const base = process.env.VUE_APP_BACKEND;
const baseURL = `${base}/api`;

export default axios.create({
  baseURL,
  headers: {}
});
