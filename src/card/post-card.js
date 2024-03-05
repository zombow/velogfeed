const postcardSVG = (title, thumbnail, short_description) => {
    const strokeWidth = 2;
    const svgWidth = "700 * 100%";
    const svgHeight = "100%";
    const cornerRadius = 15;

    // 썸네일 이미지의 크기와 위치를 설정합니다.
    const thumbnailWidth = "100%";
    const thumbnailHeight = "65%";
    const thumbnailX = 0;
    const thumbnailY = 0;

    // 제목과 요약 정보 영역의 크기와 위치를 설정합니다.
    const infoWidth = "100%";
    const infoHeight = "35%";
    const infoX = 0;
    const infoY = "65%";

    // 제목과 요약 정보의 텍스트 위치를 설정합니다.
    const titleX = "5%";
    const titleY = "10%";
    const descriptionX = "5%";
    const descriptionY = "20%";

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      <style>
        /* SVG 스타일을 여기에 추가합니다. */
        .title {
          font-family: Arial;
          font-size: 4vh; /* 텍스트 크기를 화면 크기에 상대적으로 설정합니다. */
          font-weight: bold;
          fill: #333;
        }
        .short_description {
          font-family: Arial;
          font-size: 3vh; /* 텍스트 크기를 화면 크기에 상대적으로 설정합니다. */
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
