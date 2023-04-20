const postcardSVG = (title, thumbnail, short_description) => {
  const imageWidth = "100%";
  const imageHeight = "100%";
  const strokeWidth = 4;

    const svgWidth = 500;
    const svgHeight = 500;

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
      <g transform="translate(0,0)">
        <image class="thumbnail" xlink:href="${thumbnail}" x="0" y="0"/>
      </g>
      <g transform="translate(0,210)">
        <text class="title" x="20" y="0">${title}</text>
        <text class="short_description" x="20" y="20">${short_description}</text>
      </g>
      <rect x="${strokeWidth}" y="${strokeWidth}" width="${svgWidth - strokeWidth}" height="${svgHeight - strokeWidth}" stroke="#333" stroke-width="${strokeWidth}" fill="none" />
    </svg>
  `;
};

module.exports = postcardSVG;
