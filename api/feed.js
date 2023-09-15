const fetchPosts = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");

module.exports = async (req, res) => {
    const { username, postnum, tag } = req.query;
    try {
        const posts = await fetchPosts({ username, postnum, tag });
        const postinfoList = [];

        // postnum ���� ���� ���͸��Ͽ� ����Ʈ ������ �����ɴϴ�.
        const filteredPosts = posts.slice(0, postnum);


        for (const post of filteredPosts) {
            const url = `https://velog.io/@${post.user.username}/${post.url_slug}`;
            const maxTitleLength = 28; // ���� �ִ� ����
            const maxDescriptionLength = 40; // ��� ���� �ִ� ����

            const title = post.title.length > maxTitleLength ? post.title.slice(0, maxTitleLength) + '...' : post.title;
            const shortDescription = post.short_description.length > maxDescriptionLength ? post.short_description.slice(0, maxDescriptionLength) + '...' : post.short_description;

            const postSVG = postcardSVG(title, post.thumbnail, shortDescription);
            //const postSVG = postcardSVG(post.title, post.thumbnail, post.short_description);

            const postinfo = {
                post: post,
                url: url,
                title: post.title,
                short_description: post.short_description,
                thumbnail: post.thumbnail,
                svg: postSVG,
            };
            postinfoList.push(postinfo);
        }

        res.send(postinfoList);
    } catch (e) {
        return res.send(e.message);
    }
};
