const postcardSVG = (title, thumbnail, short_description) => {
    // 카드의 전체 크기와 내부 패딩 정의
    const cardWidth = 430;
    const cardHeight = 160;
    const padding = 10;

    // 썸네일 이미지의 크기와 위치를 계산
    const thumbnailWidth = cardWidth - 2 * padding;
    const thumbnailHeight = (cardHeight - 2 * padding) * 0.65;
    const thumbnailX = padding;
    const thumbnailY = padding;

    // 타이틀 및 숏 디스크립션 영역의 크기와 위치를 계산
    const textAreaWidth = cardWidth - 2 * padding;
    const textAreaHeight = (cardHeight - 2 * padding) * 0.35;
    const textAreaX = padding;
    const textAreaY = thumbnailY + thumbnailHeight;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${cardWidth}" height="${cardHeight}" viewBox="0 0 ${cardWidth} ${cardHeight}" fill="none">
        <style>
            .header {
                font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif;
                fill: #343A40;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            .log-title { font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #212529 }
            .log-description { font-size: 12px; fill: #495057}
            .tag-item { font-size: 12px; fill: #0CA678;}
            .heart-count { font-size: 12px; fill: #495057;}
            .log-title:hover{ fill: #0CA678; text-decoration: underline;}
            .list-style{font-size:14px; fill: #212529; }
        </style>
        <!-- 카드 배경 -->
        <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="${cardWidth - 1}" fill="#fffefe" stroke-opacity="1"/>
        <!-- 썸네일 이미지 -->
        <image xlink:href="${thumbnail}" width="${thumbnailWidth}" height="${thumbnailHeight}" x="${thumbnailX}" y="${thumbnailY}" />
        <!-- 타이틀과 숏 디스크립션 영역 -->
        <g data-testid="card-title" transform="translate(${textAreaX}, ${textAreaY})">
            <g transform="translate(0, 0)">
                <!-- 타이틀 -->
                <text class="header" x="0" y="0" data-testid="header">${title}</text>
                <!-- 숏 디스크립션 -->
                <text class="list-style" x="0" y="20">${short_description}</text>
            </g>
        </g>
    </svg>
  `;
};

module.exports = postcardSVG;
