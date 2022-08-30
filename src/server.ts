import setupApp from "./app";

const port = parseInt(process.env["NODE_PORT"] ?? "8080");
const host = process.env["NODE_HOST"] ?? "localhost";

setupApp().then((app) => {
    app.listen(port, host, () => {
        console.log(`Listening on http://${host}:${port}`)
    });
});
