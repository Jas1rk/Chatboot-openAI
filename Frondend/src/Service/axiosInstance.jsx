import axios from "axios";
import { localhostUrl } from "./baseUrl";

const instance = axios.create({
  baseURL: localhostUrl,
});

export default instance;
