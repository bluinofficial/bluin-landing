const express = require("express");
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello BLUIN");
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
