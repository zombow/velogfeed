﻿const postcardSVG = (title, thumbnail, short_description) => {
    const imageWidth = 400;
    const imageHeight = 180;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="240">
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
          width: ${imageWidth}px;
          height: ${imageHeight}px;
        }
      </style>
      <image class="thumbnail" xlink:href="${thumbnail}" x="0" y="0"/>
      <text x="20" y="200" class="title">${title}</text>
      <text x="20" y="220" class="short_description">${short_description}</text>
    </svg>
  `;
};

module.exports = postcardSVG;
