const { getStore } = require("@netlify/blobs");

const ADMIN_PASSWORD = "qmffndls123";

exports.handler = async (event) => {
  const store = getStore("notices");
  const method = event.httpMethod;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // GET - 공지 목록 조회
  if (method === "GET") {
    try {
      const raw = await store.get("list");
      const notices = raw ? JSON.parse(raw) : [];
      return { statusCode: 200, headers, body: JSON.stringify(notices) };
    } catch {
      return { statusCode: 200, headers, body: JSON.stringify([]) };
    }
  }

  // POST - 공지 작성
  if (method === "POST") {
    const { password, title, content } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "비밀번호가 틀렸습니다." }) };
    }
    if (!title || !content) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "제목과 내용을 입력해주세요." }) };
    }
    const raw = await store.get("list").catch(() => null);
    const notices = raw ? JSON.parse(raw) : [];
    const notice = { id: Date.now(), title, content, date: new Date().toLocaleDateString("ko-KR") };
    notices.unshift(notice);
    await store.set("list", JSON.stringify(notices));
    return { statusCode: 200, headers, body: JSON.stringify({ success: true, notice }) };
  }

  // DELETE - 공지 삭제
  if (method === "DELETE") {
    const { password, id } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "비밀번호가 틀렸습니다." }) };
    }
    const raw = await store.get("list").catch(() => null);
    const notices = (raw ? JSON.parse(raw) : []).filter(n => n.id !== id);
    await store.set("list", JSON.stringify(notices));
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
};
