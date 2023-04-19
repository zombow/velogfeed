const fetchPost = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");

module.exports = async (req, res) => {
    const { username, short_description } = req.query;
    try {
        const post = await fetchPost(username);
        const url = new String(
            `https://velog.io/@${post.user.username}/${post.url_slug}`
        );
        const postinfo = {
            post: post.post,
            url: post.url,
            title: post.title,
            short_description: post.short_description,
        }
        const postSVG = postcardSVG(postinfo.title, postinfo.short_description);
        res.send(postSVG);
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
