const fetchPosts = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");

module.exports = async (req, res) => {
    const { username, postnum, tag } = req.query;
    try {
        const posts = await fetchPosts({ username, postnum, tag});
        const postinfoList = [];

        // postnum ���� ���� ���͸��Ͽ� ����Ʈ ������ �����ɴϴ�.
        const filteredPosts = posts.slice(0, postnum);


        for (const post of filteredPosts) {
            const url = `https://velog.io/@${post.user.username}/${post.url_slug}`;
            //const postSVG = postcardSVG(post.title, post.thumbnail, post.short_description, post.tags, post.user);
            
            const postinfo = {
                post: post,
                user: post.user,
                url: url,
                title: post.title,
                short_description: post.short_description,
                thumbnail: post.thumbnail,
                tags: post.tags,
                //svg: postSVG,
            };
            postinfoList.push(postinfo);
        }

        res.send(postinfoList);
    } catch (e) {
        return res.send(e.message);
    }
};
