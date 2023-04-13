const Parser = require('rss-parser');
const parser = new Parser();

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

        // 글 정보를 가져옴
        const item = feed.items[postnum];

        // 카드 형식으로 정보를 변환
        const card = {
            title: item.title,
            description: item.contentSnippet.slice(0, 15),
            tag: item.categories[0] || ''
        };

        // JSON 형식으로 카드를 반환
        res.json(card);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
