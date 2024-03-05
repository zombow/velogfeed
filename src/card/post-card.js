const postcardSVG = (title, thumbnail, short_description) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" style="width: 20vw; height: auto; max-width: 500px; min-width: 400px;"> <!-- SVG의 뷰박스와 크기 설정 -->
        <rect width="100%" height="100%" fill="#eee" rx="15" ry="15" />
        <image xlink:href="${thumbnail}" width="100%" height="65%" x="0" y="0" preserveAspectRatio="xMidYMid slice" />
        <text x="50%" y="70%" font-family="Arial" font-size="2vw" font-weight="bold" fill="#333" text-anchor="middle">${title}</text>
        <text x="50%" y="80%" font-family="Arial" font-size="1vw" fill="#333" text-anchor="middle">${short_description}</text>
        <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="15" ry="15" />
        
    </svg>
  `;
};

module.exports = postcardSVG;
