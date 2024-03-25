const postcardSVG = (title, thumbnail, short_description) => {
    // 패딩 값 설정
    const padding = 10;
    // 이미지의 고정된 너비와 높이 설정
    const thumbnailWidth = 430;
    const thumbnailHeight = 200;

    // 이미지의 시작 위치를 패딩 값만큼 이동시킴
    const thumbnailX = padding;
    const thumbnailY = padding;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="430" height="300" fill="fffefe">
        <style>
            .header {
                font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif;
                fill: #343A40;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            .log-title { font: bold 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #212529 }
            .log-description { font-size: 16px; fill: #495057}
            .tag-item { font-size: 12px; fill: #0CA678;}
            .heart-count { font-size: 12px; fill: #495057;}
            .log-title:hover{ fill: #0CA678; text-decoration: underline;}
            .list-style{font-size:14px; fill: #212529; }
        </style>
        <defs>
            <clipPath id="clip-path">
                <!-- 이미지의 상단 부분에만 라운드 적용 -->
                <rect x="${thumbnailX + 1}" y="${thumbnailY + 1}" rx="4" width="98.8%"" height="${thumbnailHeight}" />
            </clipPath>
            <clipPath id="clip-path-bottom">
                <!-- 이미지의 하단 부분에만 라운드 적용하지 않음 -->
                <rect x="${thumbnailX + 1}" y="${thumbnailY + thumbnailHeight / 2}" width="98.8%" height="${thumbnailHeight}" />
            </clipPath>
        </defs>
        <rect x="0.5" y="0.5" rx="4.5" height="99%" width="99%" stroke="#e4e2e2" fill="#fffefe" stroke-opacity="1"/>
        <!-- 썸네일 이미지 추가 -->
        <image xlink:href="${thumbnail}" x="${thumbnailX}" y="${thumbnailY}" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path)" />
        <!-- 하단 부분에만 라운드 적용하지 않은 이미지 -->
        <image xlink:href="${thumbnail}" x="${thumbnailX}" y="${thumbnailY}" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path-bottom)" />
        <g data-testid="card-title" transform="translate(${padding}, ${padding + 140})">
            <svg width="400" height="400" viewBox="0 0 400 300">
                <g transform="translate(0, 0)">
                    <!-- 타이틀에 패딩 적용 -->
                    <text class="log-title" x="${padding}" y="35" data-testid="log-title">${title}</text>
                </g>
            </svg>
        </g>
        <g data-testid="main-card-body" transform="translate(${padding}, ${padding + 165})">
            <svg width="400" height="400" viewBox="0 0 400 300">
                <g transform="translate(0, 0)">
                    <!-- 쇼트 디스크립션에 패딩 적용 -->
                    <text class="log-description" x=${padding} y="35">${short_description}</text>
                </g>
            </svg>
        </g>
    </svg>
  `;
};

module.exports = postcardSVG;
