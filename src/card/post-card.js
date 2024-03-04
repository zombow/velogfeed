const postcardSVG = (title, thumbnail, short_description) => {
    const strokeWidth = 2;
    const svgWidth = 700;
    const svgHeight = 400;
    const cornerRadiusTop = 15; // 상단 두 모서리의 라운드 설정
    const cornerRadiusBottom = 15; // 하단 두 모서리의 라운드 설정

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
      <!-- 테두리 그리기 -->
      <path d="M 0,${cornerRadiusTop} 
         A ${cornerRadiusTop},${cornerRadiusTop} 0 0 1 ${cornerRadiusTop},0
         L ${svgWidth - cornerRadiusTop},0
         A ${cornerRadiusTop},${cornerRadiusTop} 0 0 1 ${svgWidth},${cornerRadiusTop}
         L ${svgWidth},${svgHeight - cornerRadiusBottom}
         A ${cornerRadiusBottom},${cornerRadiusBottom} 0 0 1 ${svgWidth - cornerRadiusBottom},${svgHeight}
         L ${cornerRadiusBottom},${svgHeight}
         A ${cornerRadiusBottom},${cornerRadiusBottom} 0 0 1 0,${svgHeight - cornerRadiusBottom}
         Z" 
      fill="none" stroke="rgba(51, 51, 51, 0.5)" stroke-width="${strokeWidth}"stroke-dasharray="1,0"/>
      <g transform="translate(${thumbnailX}, ${thumbnailY})">
        <!-- 썸네일 이미지 -->
        <image class="thumbnail" xlink:href="${thumbnail}" x="0" y="0" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" /> 
      </g>
      <g transform="translate(${infoX}, ${infoY})">
        <!-- 제목 -->
        <text class="title" x="20" y="40">${title}</text>
        <!-- Short description -->
        <text class="short_description" x="30" y="80">${short_description}</text>
      </g>
    </svg>
  `;
};

module.exports = postcardSVG;
