const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async (req, res) => {
    try {
        // velog RSS �ǵ� URL
        const feedUrl = 'https://v2.velog.io/rss/@dksduddnr33';
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
