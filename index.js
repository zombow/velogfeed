const express = require('express');
const app = express();

// CORS를 처리하는 미들웨어를 추가합니다.
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// api/feed 경로로 GET 요청이 오면 feed.js 모듈을 호출합니다.
app.get('/api/feed', require('./api/feed'));

// 서버를 구동합니다.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
