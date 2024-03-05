const postcardSVG = (title, thumbnail, short_description) => {
    const svgWidth = 500; // SVG 요소의 너비 설정
    const maxTitleWidth = 400; // 최대 제목 너비 설정
    const maxDescriptionWidth = 400; // 최대 설명 너비 설정

    // SVG 이미지를 넘어가는지 여부를 확인하여 텍스트를 처리하는 함수
    const processText = (text, maxWidth) => {
        const dummySVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const dummyText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dummyText.textContent = text;
        dummyText.setAttribute('font-family', 'Arial');
        dummyText.setAttribute('font-size', '16px'); // 폰트 사이즈 설정 (임시 값)
        dummySVG.appendChild(dummyText);
        document.body.appendChild(dummySVG);
        const textWidth = dummyText.getComputedTextLength(); // 텍스트의 실제 너비 계산
        document.body.removeChild(dummySVG);

        if (textWidth > maxWidth) {
            // 너비를 넘어가는 경우 생략 (...) 처리
            let trimmedText = text;
            while (textWidth > maxWidth) {
                trimmedText = trimmedText.slice(0, -1);
                dummyText.textContent = trimmedText + '...';
                textWidth = dummyText.getComputedTextLength();
            }
            return trimmedText + '...';
        }
        return text;
    };

    const processedTitle = processText(title, maxTitleWidth);
    const processedDescription = processText(short_description, maxDescriptionWidth);

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} 300" style="width: 20vw; height: auto; max-width: 500px; min-width: 400px;"> <!-- SVG의 뷰박스와 크기 설정 -->
        <rect width="100%" height="100%" fill="#eee" rx="15" ry="15" />
        <image xlink:href="${thumbnail}" width="100%" height="65%" x="0" y="0" preserveAspectRatio="xMidYMid slice" />

        <!-- 제목을 텍스트 요소로 표시 -->
        <text x="5%" y="75%" font-family="Arial" font-size="20" font-weight="bold" fill="#333">${processedTitle}</text>

        <!-- 설명을 텍스트 요소로 표시 -->
        <text x="5%" y="85%" font-family="Arial" font-size="16" fill="#333">${processedDescription}</text>

        <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="15" ry="15" />
    </svg>
  `;
};

module.exports = postcardSVG;
