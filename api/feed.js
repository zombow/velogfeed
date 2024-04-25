const fetchPosts = require("../src/fetcher/post-fetcher");
const postcardSVG = require("../src/card/post-card");
const { JSDOM } = require("jsdom");

module.exports = async (req, res) => {
    const { username, postnum, tag } = req.query;
    try {
        const posts = await fetchPosts({ username, postnum, tag});
        const postinfoList = [];

        // postnum에 따라 포스트 리스트를 필터링합니다.
        const filteredPosts = posts.slice(0, postnum);

        for (const post of filteredPosts) {
            const url = `https://velog.io/@${post.user.username}/${post.url_slug}`;
            const postSVG = postcardSVG(post.title, post.thumbnail, post.short_description, post.tags, post.user);

            // SVG 코드를 DOM으로 만듭니다.
            const { window } = new JSDOM();
            const document = window.document;
            const div = document.createElement('div');
            div.innerHTML = postSVG;
            const svgElement = div.firstChild;

            // SVG 요소의 너비와 높이를 조절합니다.
            svgElement.setAttribute('width', '200'); // 새로운 너비
            svgElement.setAttribute('height', '150'); // 새로운 높이

            // 조절된 SVG 코드를 문자열로 변환하여 postinfo 객체에 추가합니다.
            const modifiedPostSVG = div.innerHTML;

            const postinfo = {
                post: post,
                user: post.user,
                url: url,
                title: post.title,
                short_description: post.short_description,
                thumbnail: post.thumbnail,
                tags: post.tags,
                svg: modifiedPostSVG,
            };
            postinfoList.push(postinfo);
        }

        res.send(postinfoList);
    } catch (e) {
        return res.send(e.message);
    }
};
