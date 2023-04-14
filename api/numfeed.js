const Parser = require('rss-parser');
const parser = new Parser();

// postcard.js ���Ͽ��� SVG �ڵ带 �����ɴϴ�.
const postcardSVG = require('../src/card/post-card');

function postcardSVG(title, description) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <style>
        rect {
          fill: #fff;
          stroke: #999;
        }
        text.title {
          font-size: 18px;
          font-weight: bold;
        }
        text.description {
          font-size: 14px;
        }
      </style>
      <rect x="0" y="0" width="300" height="200" rx="10" ry="10"></rect>
      <text x="10" y="30" class="title">${title}</text>
      <text x="10" y="60" class="description">${description}</text>
    </svg>
  `;
}

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
        const post = feed.items[postnum];
        const svg = postcardSVG(post.title, post.link);
        res.send(svg);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
