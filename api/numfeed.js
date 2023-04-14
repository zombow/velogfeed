const Parser = require('rss-parser');
const parser = new Parser();

// post-card.js ���Ͽ��� SVG �ڵ带 �����ɴϴ�.
const postcardSVG = require("..src/card/post-card");

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

        // JSON �������� �Ľ̵� �ǵ�� �Բ� SVG �ڵ带 ��ȯ�մϴ�.
        res.json({
            feedItem: feed.items[postnum],
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
