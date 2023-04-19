const fetchPost = require("../src/fetcher/post-fetcher");

module.exports = async (req, res) => {
    const { name } = req.query;
    console.log(name);
    try {
        const post = await fetchPost(name);
        const url = new String(
            `https://velog.io/@${post.user.username}/${post.url_slug}`
        );
        res.send(post);
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
