const fetchPost = require("../src/fetcher/post-fetcher");

module.exports = async (req, res) => {
    const { username } = req.query;
    console.log(username);
    try {
        const post = await fetchPost(username);
        const url = new String(
            `https://velog.io/@${post.user.username}/${post.url_slug}`
        );
        res.send(post);
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
