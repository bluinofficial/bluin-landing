const https = require("https");

const ADMIN_PASSWORD = "qmffndls123";
const BIN_ID = process.env.JSONBIN_ID;
const API_KEY = process.env.JSONBIN_KEY;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonbinRequest(method, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.jsonbin.io",
      path: `/v3/b/${BIN_ID}`,
      method,
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
        "X-Bin-Versioning": "false",
      },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod === "GET") {
    const result = await jsonbinRequest("GET");
    const notices = result.record?.notices || [];
    return { statusCode: 200, headers, body: JSON.stringify(notices) };
  }

  if (event.httpMethod === "POST") {
    const { password, title, content } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "비밀번호가 틀렸습니다." }) };
    }
    if (!title || !content) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "제목과 내용을 입력해주세요." }) };
    }
    const result = await jsonbinRequest("GET");
    const notices = result.record?.notices || [];
    const notice = { id: Date.now(), title, content, date: new Date().toLocaleDateString("ko-KR") };
    notices.unshift(notice);
    await jsonbinRequest("PUT", { notices });
    return { statusCode: 200, headers, body: JSON.stringify({ success: true, notice }) };
  }

  if (event.httpMethod === "DELETE") {
    const { password, id } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "비밀번호가 틀렸습니다." }) };
    }
    const result = await jsonbinRequest("GET");
    const notices = (result.record?.notices || []).filter((n) => n.id !== id);
    await jsonbinRequest("PUT", { notices });
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
};
