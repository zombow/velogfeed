const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async (req, res) => {
    try {
        // ��û �Ķ���Ϳ��� ����� �̸��� ������
        const username = req.query.username;
        if (!username) {
            return res.status(400).send('username parameter is required');
        }

        // velog RSS �ǵ� URL
        const feedUrl = `https://v2.velog.io/rss/@${username}`;
        const feed = await parser.parseURL(feedUrl);

        // CORS ���
        res.setHeader('Access-Control-Allow-Origin', '*');

        // JSON �������� �Ľ̵� �ǵ带 ��ȯ
        res.json(feed);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};