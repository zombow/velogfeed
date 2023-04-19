const fetchPost = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");

module.exports = async (req, res) => {
    const { username, postnum } = req.query;
    try {
        const post = await fetchPost(username, postnum);
        const url = new String(
            `https://velog.io/@${post.user.username}/${post.url_slug}`
        );
        const postSVG = postcardSVG(post.title, post.short_description);
        const postinfo = {
            post: post,
            url: url,
            title: post.title,
            short_description: post.short_description,
            svg: postSVG,
        }
        res.send(postinfo);
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
;
