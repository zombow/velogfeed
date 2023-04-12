const express = require('express');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

app.get('/api/feed', async (req, res) => {
    const { username, postnum } = req.query;
    const feed = await parser.parseURL(`https://velog.io/rss/@${username}`);

    let items = [];
    for (let i = 0; i < feed.items.length && i < postnum; i++) {
        const item = feed.items[i];
        items.push({
            title: item.title,
            link: item.link,
            contentSnippet: item.contentSnippet
        });
    }

    res.json({ items });
});