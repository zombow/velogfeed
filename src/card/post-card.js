﻿const postcardSVG = (title, thumbnail, short_description) => {
    // 패딩 값 설정
    const padding = 10;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="430" height="330" viewBox="0 0 430 330" fill="none">
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
        <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="429" fill="#fffefe" stroke-opacity="1"/>
        <g data-testid="card-title" transform="translate(${padding}, ${padding})">
            <g transform="translate(0, 0)">
                <!-- 썸네일 이미지 추가 -->
                <image xlink:href="${thumbnail}" width="100%" height="65%" />
                <!-- 타이틀에 패딩 적용 -->
                <text class="header" x="${padding}" y="${padding + 90}" data-testid="header">${title}</text>
            </g>
        </g>
        <g data-testid="main-card-body" transform="translate(${padding}, ${padding + 80})">
            <svg x="0" width="400" height="400" viewBox="0 0 400 400">
                <g transform="translate(0, 0)">
                    <!-- 쇼트 디스크립션에 패딩 적용 -->
                    <text class="list-style" x="0" y="20">•</text>
                    <text class="log-title" x="15" y="35">${short_description}</text>
                </g>
            </svg>
        </g>
    </svg>
  `;
};

module.exports = postcardSVG;
