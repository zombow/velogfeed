const fetchPost = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");

module.exports = async (req, res) => {
    const { username, postnum, tag } = req.query;
    try {
        const posts = await fetchPosts({ username, postnum, tag }); // fetchPosts 함수를 사용하여 여러 게시물 정보를 가져옵니다.

        // 가져온 게시물 정보를 순회하면서 포스트카드를 생성하고 배열에 저장합니다.
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

        res.send(postcards); // 배열에 저장된 포스트카드들을 응답으로 반환합니다.
        return;
    } catch (e) {
        return res.send(e.message);
    }
};
