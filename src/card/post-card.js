const postcardSVG = (title, thumbnail, short_description) => {
    const strokeWidth = 2;
    const svgWidth = "100%";
    const svgHeight = "100%";
    const cornerRadius = 15; // 모서리의 라운드 설정

    // 제목과 요약 정보 텍스트의 위치 설정
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
          font-size: 4vw; /* 텍스트 크기를 화면 크기에 상대적으로 설정합니다. */
          font-weight: bold;
          fill: #333;
        }
        .short_description {
          font-family: Arial;
          font-size: 3vw; /* 텍스트 크기를 화면 크기에 상대적으로 설정합니다. */
          fill: #333;
        }
        .thumbnail{
        }
      </style>
      <rect x="0" y="0" width="100%" height="100%" fill="#eee" rx="${cornerRadius}" ry="${cornerRadius}" />
      <image class="thumbnail" xlink:href="${thumbnail}" width="100%" height="65%" preserveAspectRatio="xMidYMid slice" />
      <text class="title" x="${titleX}" y="${titleY}">${title}</text>
      <text class="short_description" x="${descriptionX}" y="${descriptionY}">${short_description}</text>
      <rect x="0" y="0" width="100%" height="100%" stroke="#333" stroke-width="${strokeWidth}" fill="none" rx="${cornerRadius}" ry="${cornerRadius}" />
    </svg>
  `;
};

module.exports = postcardSVG;
