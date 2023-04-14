﻿const postcardSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="180">
    <style>
      /* SVG 스타일을 여기에 추가합니다. */
      .title {
        font-family: Arial;
        font-size: 24px;
        font-weight: bold;
        fill: #333;
      }
      .content {
        font-family: Arial;
        font-size: 16px;
        fill: #333;
      }
    </style>
    <rect x="0" y="0" width="400" height="180" fill="#FFF"/>
    <text x="20" y="40" class="title">Hello, world!</text>
    <text x="20" y="80" class="content">This is a sample postcard.</text>
  </svg>
`;

module.exports = postcardSVG;