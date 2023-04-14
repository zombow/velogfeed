const Parser = require('rss-parser');
const parser = new Parser();
// postcard.js ���Ͽ��� SVG �ڵ带 �����ɴϴ�.
const postcardSVG = require('./src/card/postcard');

module.exports = async (req, res) => {
    try {
        // ��û �Ķ���Ϳ��� ����� �̸��� ������
        const username = req.query.username;
        if (!username) {
            return res.status(400).send('username parameter is required. this is numfeed');
        }
        // ��û �Ķ���Ϳ��� �ۼ����� ������
        let postnum = parseInt(req.query.postnum);
        if (!postnum) {
            postnum = 0;
        } else {
            postnum = parseInt(postnum);
        }

        // velog RSS �ǵ� URL
        const feedUrl = `https://v2.velog.io/rss/@${username}`;
        const feed = await parser.parseURL(feedUrl);

        // CORS ���
        res.setHeader('Access-Control-Allow-Origin', '*');

        // JSON �������� �Ľ̵� �ǵ带 ��ȯ
        res.json(feed.items[postnum]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
