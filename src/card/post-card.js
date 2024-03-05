const postcardSVG = (title, thumbnail, short_description) => {
    const strokeWidth = 2;
    const svgWidth = 400;
    const svgHeight = 400;
    const cornerRadius = 15; // 모서리의 라운드 설정

    // 썸네일 이미지의 크기와 위치를 설정합니다.
    const thumbnailWidth = svgWidth;
    const thumbnailHeight = svgHeight * 0.65;
    const thumbnailX = 0;
    const thumbnailY = 0;

    // 제목과 요약 정보 영역의 크기와 위치를 설정합니다.
    const infoWidth = svgWidth;
    const infoHeight = svgHeight * 0.35;
    const infoX = 0;
    const infoY = thumbnailHeight;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      <style>
        /* SVG 스타일을 여기에 추가합니다. */
        .title {
          font-family: Arial;
          font-size: 28px;
          font-weight: bold;
          fill: #333;
        }
        .short_description {
          font-family: Arial;
          font-size: 22px;
          fill: #333;
        }
        .thumbnail{
        }
      </style>
      <g transform="translate(${thumbnailX}, ${thumbnailY})">
        <!-- 썸네일 이미지 -->
        <rect x="0" y="0" width="${thumbnailWidth}" height="${thumbnailHeight}" fill="#ccc" rx="${cornerRadius}" ry="${cornerRadius}" />
        <image class="thumbnail" xlink:href="${thumbnail}" x="0" y="0" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" />
      </g>
      <!-- 제목과 요약 정보 -->
      <rect x="${infoX}" y="${infoY}" width="${infoWidth}" height="${infoHeight}" fill="#eee" />
      <rect x="${infoX}" y="${infoY + infoHeight - cornerRadius}" width="${infoWidth}" height="${cornerRadius}" fill="#eee" rx="${cornerRadius}" ry="${cornerRadius}" />
      <text class="title" x="${infoX + 20}" y="${infoY + 40}">${title}</text>
      <text class="short_description" x="${infoX + 30}" y="${infoY + 80}">${short_description}</text>
      <!-- 테두리 그리기 -->
      <rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" stroke="#333" stroke-width="${strokeWidth}" fill="none" rx="${cornerRadius}" ry="${cornerRadius}" />
    </svg>
  `;
};

const createLatestCardTitle = (username) => {
    return `
    <g data-testid="card-title" transform="translate(25, 35)">
        <g transform="translate(0, 0)">
          <text x="0" y="0" class="header" data-testid="header">${username}.log 's latest posts</text>
        </g>
    </g>
    `;
};

const createLatestCardBody = ({ posts }) => {
    const post_urls = posts.map(
        (post) => `https://velog.io/@${post.user.username}/` + post.url_slug
    );
    return `
  <g data-testid="main-card-body" transform="translate(0, 45)">
  <svg data-testid="lang-items" x="25" width="400" height="400" viewBox="0 0 400 400">
      <g transform="translate(0, 0)">
          <text data-testid="lang-list" class="list-style" x="5" y="20">•</text>
          <a href="${post_urls[0]}">
              <text data-testid="lang-name" x="20" y="20" class="log-title">${
        posts[0]?.title || "-"
    }</text>
          </a>
          <text data-testid="lang-list" class="list-style" x="5" y="43">•</text>
          <a href="${post_urls[1]}">
              <text data-testid="lang-name" x="20" y="43" class="log-title">${
        posts[1]?.title || "-"
    }</text>
          </a>
          <text data-testid="lang-list" class="list-style" x="5" y="66">•</text>
          <a href="${post_urls[2]}">
              <text data-testid="lang-name" x="20" y="66" class="log-title">${
        posts[2]?.title || "-"
    }</text>
          </a>
          <text data-testid="lang-list" class="list-style" x="5" y="89">•</text>
          <a href="${post_urls[3]}">
              <text data-testid="lang-name" x="20" y="89" class="log-title">${
        posts[3]?.title || "-"
    }</text>
          </a>
      </g>
  </svg>
</g>
    `;
};

const createLatestCard = (data) => {
    const postinfoList = [];

    for (const post of data.posts) {
        const postSVG = postcardSVG(post.title, post.thumbnail, post.short_description);

        const postinfo = {
            post: post,
            url: `https://velog.io/@${post.user.username}/${post.url_slug}`,
            title: post.title,
            short_description: post.short_description,
            thumbnail: post.thumbnail,
            svg: postSVG,
        };
        postinfoList.push(postinfo);
    }

    const username = data.posts[0]?.user.username;
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="430" height="160" viewBox="0 0 430 160" fill="none">
      ${latestCardStyle}
      <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="429" fill="#fffefe" stroke-opacity="1"/>
      ${createLatestCardTitle(username)}
      ${createLatestCardBody({ posts: data.posts })}
    </svg>
  `;
};

module.exports = createLatestCard;
