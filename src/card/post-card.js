const postcardSVG = (title, thumbnail, short_description) => {
    const postcardStyle = `
    <style>
        .postcard-title { font: bold 20px 'Arial'; fill: #333; }
        .postcard-description { font: 16px 'Arial'; fill: #333; }
        /* 다른 스타일 정의 */
    </style>
  `;

    const postcardContent = `
    <rect width="100%" height="100%" fill="#eee" rx="15" ry="15" />
    <image xlink:href="${thumbnail}" width="100%" height="65%" x="0" y="0" preserveAspectRatio="xMidYMid slice" />
    <text x="2%" y="75%" class="postcard-title" text-anchor="start">${title}</text>
    <text x="2%" y="85%" class="postcard-description" text-anchor="start">${short_description}</text>
    <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="15" ry="15" />
  `;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" style="width: 20vw; height: auto; max-width: 500px; min-width: 400px;">
        ${postcardStyle}
        ${postcardContent}
    </svg>
  `;
};

module.exports = postcardSVG;
