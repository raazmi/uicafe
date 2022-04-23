import axios from "axios";
import { getToken } from "./get-token";

const token = getToken();

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

const authHttp = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ? token : ""}`,
    },
});

export { http, authHttp };
