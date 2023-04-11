const express = require("express");
const Parser = require("rss-parser");

const app = express();
const parser = new Parser();

app.get("/", async (req, res) => {
    const feed = await parser.parseURL("https://v2.velog.io/rss/@dksduddnr33");

    const items = feed.items.map((item) => {
        return {
            title: item.title,
            link: item.link,
            date: item.pubDate,
            description: item.content,
        };
    });

    res.json(items);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port", process.env.PORT || 3000);
});
