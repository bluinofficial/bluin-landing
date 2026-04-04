const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const NOTICES_FILE = path.join(__dirname, "notices.json");
const ADMIN_PASSWORD = "qmffndls123";

function loadNotices() {
  if (!fs.existsSync(NOTICES_FILE)) return [];
  return JSON.parse(fs.readFileSync(NOTICES_FILE, "utf-8"));
}

function saveNotices(notices) {
  fs.writeFileSync(NOTICES_FILE, JSON.stringify(notices, null, 2));
}

app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 공지사항 목록 조회
app.get("/api/notices", (req, res) => {
  res.json(loadNotices());
});

// 공지사항 작성 (관리자)
app.post("/api/notices", (req, res) => {
  const { password, title, content } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "비밀번호가 틀렸습니다." });
  }
  if (!title || !content) {
    return res.status(400).json({ error: "제목과 내용을 입력해주세요." });
  }
  const notices = loadNotices();
  const notice = {
    id: Date.now(),
    title,
    content,
    date: new Date().toLocaleDateString("ko-KR")
  };
  notices.unshift(notice);
  saveNotices(notices);
  res.json({ success: true, notice });
});

// 공지사항 삭제 (관리자)
app.delete("/api/notices/:id", (req, res) => {
  const { password } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "비밀번호가 틀렸습니다." });
  }
  const notices = loadNotices().filter(n => n.id !== parseInt(req.params.id));
  saveNotices(notices);
  res.json({ success: true });
});

app.get("/resorts", (req, res) => {
  res.json([
    { id: 1, name: "Bohol Dive Resort" },
    { id: 2, name: "Cebu Ocean Center" },
    { id: 3, name: "Bali Blue Dive" }
  ]);
});

app.get("/booking-test", (req, res) => {
  const bookingData = {
    user: "이도현",
    resort: "Bohol Dive Resort",
    date: "2026-04-01",
    license: "Advanced"
  };

  console.log("테스트 예약 요청:", bookingData);

  res.json({
    message: "예약 테스트 성공",
    booking: bookingData
  });
});

app.post("/booking", (req, res) => {
  const bookingData = req.body;

  console.log("예약 요청 들어옴:", bookingData);

  res.json({
    message: "예약이 정상적으로 접수되었습니다.",
    booking: bookingData
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
