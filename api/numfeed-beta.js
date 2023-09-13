const fetchPost = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");

module.exports = async (req, res) => {
    const { username, postnum, tag } = req.query;
    try {
        const posts = await fetchPosts({ username, postnum, tag });
        const postcards = posts.map(post => {
            const url = `https://velog.io/@${post.user.username}/${post.url_slug}`;
            const postSVG = postcardSVG(post.title, post.thumbnail, post.short_description);
            return {
                post: post,
                url: url,
                title: post.title,
                short_description: post.short_description,
                thumbnail: post.thumbnail,
                svg: postSVG,
            };
        });

        res.send(postcards); 
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
