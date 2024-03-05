const postcardSVG = (title, thumbnail, short_description) => {
    const svgWidth = 500; // SVG 이미지 너비
    const svgHeight = 300; // SVG 이미지 높이
    const textMargin = 10; // 텍스트 여백

    // 텍스트 요소의 크기를 계산
    const titleHeight = measureTextHeight(title, "Arial", 20);
    const descriptionHeight = measureTextHeight(short_description, "Arial", 16);

    // 텍스트 높이가 SVG 이미지 높이를 초과하는지 확인
    const isTitleOverflow = titleHeight > svgHeight - 2 * textMargin;
    const isDescriptionOverflow = descriptionHeight > svgHeight - titleHeight - 3 * textMargin;

    // 텍스트가 넘어갈 경우 "..."으로 축약
    const shortenedTitle = isTitleOverflow ? shortenText(title, svgWidth / 10) + "..." : title;
    const shortenedDescription = isDescriptionOverflow ? shortenText(short_description, svgWidth / 12) + "..." : short_description;

    return `
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" style="width: 20vw; height: auto; max-width: 500px; min-width: 400px;">
            <rect width="100%" height="100%" fill="#eee" rx="15" ry="15" />
            <image xlink:href="${thumbnail}" width="100%" height="65%" x="0" y="0" preserveAspectRatio="xMidYMid slice" />

            <text x="${textMargin}%" y="${75 - titleHeight / 2}%" font-family="Arial" font-size="20" font-weight="bold" fill="#333" text-anchor="start">${shortenedTitle}</text>

            <text x="${textMargin}%" y="${85 + titleHeight + descriptionHeight / 2}%" font-family="Arial" font-size="16" fill="#333" text-anchor="start">${shortenedDescription}</text>

            <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="15" ry="15" />
        </svg>
    `;
};

// 텍스트 높이 측정 함수
function measureTextHeight(text, font, fontSize) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${fontSize}px ${font}`;
    const metrics = context.measureText(text);
    return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
}



module.exports = postcardSVG;
