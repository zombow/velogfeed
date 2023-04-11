const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async (req, res) => {
    try {
        // velog RSS 피드 URL
        const feedUrl = 'https://v2.velog.io/rss/@dksduddnr33';
        const feed = await parser.parseURL(feedUrl);

        // CORS 허용
        res.setHeader('Access-Control-Allow-Origin', '*');

        // JSON 형식으로 파싱된 피드를 반환
        res.json(feed);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
