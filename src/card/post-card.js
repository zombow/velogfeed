const postcardSVG = (title, thumbnail, short_description) => {
    const imageWidth = "100%";
    const imageHeight = "100%";
    const strokeWidth = 4;
    const svgWidth = 500;
    const svgHeight = 300;
    const thumbnailHeight = svgHeight * 0.4; // 썸네일이 차지할 높이 비율
    const titleHeight = svgHeight * 0.2; // 타이틀이 차지할 높이 비율
    const descriptionHeight = svgHeight * 0.2; // 설명이 차지할 높이 비율

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      <style>
        /* SVG 스타일을 여기에 추가합니다. */
        .title {
          font-family: Arial;
          font-size: 24px;
          font-weight: bold;
          fill: #333;
        }
        .short_description {
          font-family: Arial;
          font-size: 16px;
          fill: #333;
        }
        .thumbnail{
          width: ${imageWidth};
          height: ${imageHeight};
        }
      </style>
      <g transform="translate(0,${(svgHeight - thumbnailHeight) / 2})">
        <image class="thumbnail" xlink:href="${thumbnail}" x="0" y="0" height="${thumbnailHeight}"/>
      </g>
      <g transform="translate(0,${thumbnailHeight + (titleHeight / 2)})">
        <text class="title" x="20" y="0">${title}</text>
      </g>
      <g transform="translate(0,${thumbnailHeight + titleHeight + (descriptionHeight / 2)})">
        <text class="short_description" x="20" y="0">${short_description}</text>
      </g>
      <rect x="${strokeWidth}" y="${strokeWidth}" width="${svgWidth - strokeWidth}" height="${svgHeight - strokeWidth}" stroke="#333" stroke-width="${strokeWidth}" fill="none" />
    </svg>
  `;
};

module.exports = postcardSVG;
