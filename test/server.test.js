const { test } = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const { createApp } = require("../src/server");

test("GET /health returns ok", async () => {
  const server = createApp().listen(0);
  const { port } = server.address();
  const body = await new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/health`, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve({ status: res.statusCode, data }));
    }).on("error", reject);
  });
  server.close();
  assert.equal(body.status, 200);
  assert.match(body.data, /ok/);
});
