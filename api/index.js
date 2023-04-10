const axios = require('axios');
const Parser = require('rss-parser');
const parser = new Parser();

exports.handler = async (event, context) => {
    try {
        const response = await axios.get('https://v2.velog.io/rss/@dksduddnr33');
        const feed = await parser.parseString(response.data);
        const posts = feed.items.map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.contentSnippet
        }));
        return {
            statusCode: 200,
            body: JSON.stringify(posts)
        }
    } catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
