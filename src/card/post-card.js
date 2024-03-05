const postcardSVG = (title, thumbnail, short_description, maxCharacters) => {
    // 텍스트가 최대 길이를 초과하면 일정 길이까지만 자르고 ... 추가
    const shortenText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const shortenedTitle = shortenText(title, maxCharacters);
    const shortenedDescription = shortenText(short_description, maxCharacters);

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" style="width: 20vw; height: auto; max-width: 500px; min-width: 400px;"> <!-- SVG의 뷰박스와 크기 설정 -->
        <rect width="100%" height="100%" fill="#eee" rx="15" ry="15" />
        <image xlink:href="${thumbnail}" width="100%" height="65%" x="0" y="0" preserveAspectRatio="xMidYMid slice" />

        <!-- 제목을 줄이고 생략 (...) 처리 -->
        <text x="5%" y="20%" font-family="Arial" font-size="20" font-weight="bold" fill="#333" text-anchor="start">${shortenedTitle}</text>

        <!-- 설명을 줄이고 생략 (...) 처리 -->
        <text x="5%" y="30%" font-family="Arial" font-size="16" fill="#333" text-anchor="start">${shortenedDescription}</text>

        <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="15" ry="15" />
    </svg>
  `;
};

module.exports = postcardSVG;
