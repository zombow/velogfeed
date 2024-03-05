const postcardSVG = (title, thumbnail, short_description) => {
    const strokeWidth = 2;
    const cornerRadius = 15; // 모서리의 라운드 설정

    // 윈도우의 너비와 높이를 가져옵니다.
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // SVG의 너비와 높이를 설정합니다.
    const svgWidth = windowWidth * 0.8; // 윈도우 너비의 80%
    const svgHeight = windowHeight * 0.8; // 윈도우 높이의 80%

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

    // 제목과 요약 정보의 텍스트 위치를 설정합니다.
    const titleX = 20;
    const titleY = infoY + 40;
    const descriptionX = 30;
    const descriptionY = infoY + 80;

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
      <text class="title" x="${titleX}" y="${titleY}">${title}</text>
      <text class="short_description" x="${descriptionX}" y="${descriptionY}">${short_description}</text>
      <!-- 테두리 그리기 -->
      <rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" stroke="#333" stroke-width="${strokeWidth}" fill="none" rx="${cornerRadius}" ry="${cornerRadius}" />
    </svg>
  `;
};

module.exports = postcardSVG;
