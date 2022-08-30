import { AxiosResponse } from "axios";
import setCookie from "set-cookie-parser";

export default function parseCookies(response: AxiosResponse<any, any>) {
    const setCookieHeader = response.headers["set-cookie"] ?? [];
    return setCookie.parse(setCookieHeader, { map: true })
}