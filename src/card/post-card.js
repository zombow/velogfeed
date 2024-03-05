const postcardSVG = (title, thumbnail, short_description) => {
    // SVG의 너비와 높이
    const svgWidth = 500;
    const svgHeight = 300;

    // 텍스트 요소의 최대 너비
    const maxTextWidth = 400;

    // 텍스트를 줄이고 생략 (...) 처리하는 함수
    const shortenText = (text, maxWidth) => {
        let truncatedText = text;
        const dummySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const dummyText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        dummyText.textContent = text;
        dummySvg.appendChild(dummyText);
        document.body.appendChild(dummySvg);
        while (dummyText.getComputedTextLength() > maxWidth) {
            truncatedText = truncatedText.slice(0, -1);
            dummyText.textContent = truncatedText + "...";
        }
        document.body.removeChild(dummySvg);
        return truncatedText;
    };

    // 제목과 설명을 줄이고 생략 (...) 처리
    const shortenedTitle = shortenText(title, maxTextWidth);
    const shortenedDescription = shortenText(short_description, maxTextWidth);

    // SVG 문자열 생성
    const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}" style="width: 100%; height: auto;">
            <rect width="100%" height="100%" fill="#eee" rx="15" ry="15" />
            <image xlink:href="${thumbnail}" width="100%" height="65%" x="0" y="0" preserveAspectRatio="xMidYMid slice" />

            <!-- 제목 -->
            <text x="10" y="230" font-family="Arial" font-size="20" fill="#333">${shortenedTitle}</text>

            <!-- 설명 -->
            <text x="10" y="260" font-family="Arial" font-size="16" fill="#333">${shortenedDescription}</text>

            <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="15" ry="15" />
        </svg>
    `;

    return svgString;
};

module.exports = postcardSVG;
