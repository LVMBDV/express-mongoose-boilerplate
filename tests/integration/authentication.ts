import axios from "axios";
import parseCookies from "../helpers/parse-cookies";

describe("authentication flow", () => {
    it("signs the user in", async () => {
        const response = await axios.post("/sessions", { email: "user@example.com", password: "hunter42" });
        const cookies = parseCookies(response);

        expect(response.status).toBe(201);
        expect(cookies).toHaveProperty("uid");
    })
})