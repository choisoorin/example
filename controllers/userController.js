// mongoDB용 컨트롤러
// mongoConnect 생성후
// 접속용 모듈 가져오기
const mongoClient = require("./mongoConnect");

// 객체 생성 후 기능 생성하기
const db = {
  getUsers: async () => {
    // 몽고db 접속코드
    const client = await mongoClient.connect();
    const user = client.db("kdt4").collection("user");

    const userCursor = user.find({});
    const userList = await userCursor.toArray();
    //
    if (userList.length === 0) return false;
    return userList;
  },
};

module.exports = db;
