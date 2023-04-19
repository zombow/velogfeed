const fetchPost = require("../src/fetcher/post-fetcher");

module.exports = async (req, res) => {
    const { name, tag } = req.query;
    try {
        const post = await fetchPost(name, tag);
        const url = new String(
            `https://velog.io/@${post.user.username}/${post.url_slug}`
        );
        res.send(post);
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
