// npm init -y
// npm install express ejs mongodb

// 1. 익스프레스
const express = require("express");
const app = express();
const PORT = 7000;

// 5. 컨트롤러 불러오기
const db = require("./controllers/userController");

// 2. ejs (뷰엔진 사용하기 때문에 *veiws폴더*안에 ejs파일 생성해야함)
app.set("view engine", "ejs");

// 4.주소에 따른 처리
// 4_1. 메인페이지 주소
app.get("/", (req, res) => {
  res.render("index");
});

// 4_2. 회원목록 주소
app.get("/userList", async (req, res) => {
  // 6. 컨트롤러의 기능 사용
  const MEMBERS = await db.getUsers();
  // 6-1. 콘솔로그로 MEMBERS가 잘들어오는지 확인하기
  //   console.log(MEMBERS);
  res.render("userList", { MEMBERS });
});

// 3. 서버 켜는 코드
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다.`);
});
