const postcardSVG = (title, thumbnail, short_description) => {
    // 패딩 값 설정
    const padding = 10;
    // 이미지의 고정된 너비와 높이 설정
    const thumbnailWidth = 417;
    const thumbnailHeight = 187;

    // 썸네일 이미지를 원하는 위치로 이동시키기 위한 좌표 설정
    const thumbnailX = 5; // 원하는 x 좌표
    const thumbnailY = 5; // 원하는 y 좌표

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
                <rect x="1" y="1" rx="8" width="${thumbnailWidth}"  height="${thumbnailHeight}" />
            </clipPath>
        </defs>
        <rect rx="5" width="${430}" height="${300}" stroke="#e4e2e2" fill="#fffefe" stroke-opacity="1"/>
        <!-- 썸네일 이미지 추가 -->
        <image xlink:href="${thumbnail}" transform="translate(${thumbnailX}, ${thumbnailY})" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path)" />
        <g data-testid="card-title" transform="translate(${(430 - (430 - (padding*2))) / 2}, 215)">
            <svg width=${430 - (padding*2)} height="300">
                <!-- 타이틀에 패딩 적용 -->
                <text class="log-title" x="${padding}" y="35" data-testid="log-title">${title}</text>
            </svg>
        </g>
        <g data-testid="card-title" transform="translate(${(430 - (430 - (padding*2))) / 2}, 235)">
            <svg width=${430 - (padding*2)} height="300">
                <!-- 쇼트 디스크립션에 패딩 적용 -->
                <text class="log-description" x=${padding} y="35">${short_description}</text>
            </svg>
        </g>
    </svg>
  `;
};

module.exports = postcardSVG;
