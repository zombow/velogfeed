const express = require('express');
const app = express();

// CORS�� ó���ϴ� �̵��� �߰��մϴ�.
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// api/feed ��η� GET ��û�� ���� feed.js ����� ȣ���մϴ�.
app.get('/api/feed', require('./api/feed'));

// ������ �����մϴ�.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
