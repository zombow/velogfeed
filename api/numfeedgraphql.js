const fetchPost = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");

module.exports = async (req, res) => {
    const { username, tag, short_description } = req.query;
    try {
        const post = await fetchPost(username, tag);
        const url = new String(
            `https://velog.io/@${post.user.username}/${post.url_slug}`
        );
        const datas = {
            url: url,
            post: post
        }
        const postSVG = postcardSVG(datas, short_description);
        res.send(postSVG);
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
