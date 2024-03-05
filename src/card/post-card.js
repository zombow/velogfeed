const postcardSVG = (title, thumbnail, short_description) => {
    const svgWidth = "80vw"; // 카드의 너비를 화면 너비의 80%로 설정
    const svgHeight = "80vh"; // 카드의 높이를 화면 높이의 80%로 설정
    const cornerRadius = "15px"; // 모서리의 라운드 설정

    // 썸네일 이미지의 크기와 위치를 설정합니다.
    const thumbnailWidth = "100%";
    const thumbnailHeight = "65%";
    const thumbnailX = "0";
    const thumbnailY = "0";

    // 제목과 요약 정보 영역의 위치를 설정합니다.
    const titleX = "5%";
    const titleY = "75%";
    const descriptionX = "5%";
    const descriptionY = "85%";

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      <rect width="100%" height="100%" fill="#eee" rx="${cornerRadius}" ry="${cornerRadius}" />
      <image xlink:href="${thumbnail}" width="${thumbnailWidth}" height="${thumbnailHeight}" x="${thumbnailX}" y="${thumbnailY}" preserveAspectRatio="xMidYMid slice" />
      <text x="${titleX}" y="${titleY}" font-family="Arial" font-size="4vw" font-weight="bold" fill="#333">${title}</text>
      <text x="${descriptionX}" y="${descriptionY}" font-family="Arial" font-size="3vw" fill="#333">${short_description}</text>
      <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="${cornerRadius}" ry="${cornerRadius}" />
    </svg>
  `;
};

module.exports = postcardSVG;
