const postcardSVG = (title, thumbnail, short_description) => {
    const strokeWidth = 2;
    const aspectRatio = 1.75; // 가로:세로 비율
    const maxWidth = 100%; // SVG 최대 너비

    // 썸네일 이미지의 크기와 위치를 설정합니다.
    const thumbnailWidth = maxWidth;
    const thumbnailHeight = thumbnailWidth / aspectRatio;
    const thumbnailX = 0;
    const thumbnailY = 0;

    // 제목과 요약 정보 영역의 위치를 설정합니다.
    const infoX = 0;
    const infoY = thumbnailHeight;
    const infoWidth = maxWidth;
    const infoHeight = 100 - thumbnailHeight;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${thumbnailWidth} ${thumbnailHeight + infoHeight}">
      <style>
        /* SVG 스타일을 여기에 추가합니다. */
        .title {
          font-family: Arial;
          font-size: 5vw; /* 상대적인 폰트 크기 */
          font-weight: bold;
          fill: #333;
        }
        .short_description {
          font-family: Arial;
          font-size: 4vw; /* 상대적인 폰트 크기 */
          fill: #333;
        }
        .thumbnail{
          width: 100%;
          height: auto;
        }
      </style>
      <g transform="translate(${thumbnailX}, ${thumbnailY})">
        <!-- 썸네일 이미지 -->
        <image class="thumbnail" xlink:href="${thumbnail}" x="0" y="0" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" />
      </g>
      <!-- 제목과 요약 정보 -->
      <rect x="${infoX}" y="${infoY}" width="${infoWidth}" height="${infoHeight}" fill="#eee" />
      <rect x="${infoX}" y="${infoY + infoHeight - cornerRadius}" width="${infoWidth}" height="${cornerRadius}" fill="#eee" rx="${cornerRadius}" ry="${cornerRadius}" />
      <text class="title" x="${infoX + 20}" y="${infoY + 40}">${title}</text>
      <text class="short_description" x="${infoX + 30}" y="${infoY + 80}">${short_description}</text>
      <!-- 테두리 그리기 -->
      <rect x="0" y="0" width="${thumbnailWidth}" height="${thumbnailHeight + infoHeight}" stroke="#333" stroke-width="${strokeWidth}" fill="none" rx="${cornerRadius}" ry="${cornerRadius}" />
    </svg>
  `;
};

module.exports = postcardSVG;
