const Parser = require('rss-parser');
const parser = new Parser();
// postcard.js 파일에서 SVG 코드를 가져옵니다.
const postcardSVG = require('./src/card/postcard');

module.exports = async (req, res) => {
    try {
        // 요청 파라미터에서 사용자 이름을 가져옴
        const username = req.query.username;
        if (!username) {
            return res.status(400).send('username parameter is required. this is numfeed');
        }
        // 요청 파라미터에서 글순서를 가져옴
        let postnum = parseInt(req.query.postnum);
        if (!postnum) {
            postnum = 0;
        } else {
            postnum = parseInt(postnum);
        }

        // velog RSS 피드 URL
        const feedUrl = `https://v2.velog.io/rss/@${username}`;
        const feed = await parser.parseURL(feedUrl);

        // CORS 허용
        res.setHeader('Access-Control-Allow-Origin', '*');

        // JSON 형식으로 파싱된 피드를 반환
        res.json(feed.items[postnum]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
