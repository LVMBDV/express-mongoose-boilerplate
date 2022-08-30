import axios from "axios";

const port = parseInt(process.env["NODE_PORT"] ?? "8080");
const host = process.env["NODE_HOST"] ?? "localhost";

axios.defaults.baseURL = `http://${host}:${port}`;
axios.defaults.validateStatus = () => true;