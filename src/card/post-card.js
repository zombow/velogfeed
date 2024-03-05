// SVG를 HTML에 추가하는 함수
const appendSVG = (svgString) => {
    const container = document.getElementById('svg-container');
    container.innerHTML = svgString;
};

// SVG 생성 및 처리 함수
const createPostcardSVG = (title, thumbnail, short_description) => {
    // SVG 요소의 너비 설정
    const svgWidth = 500;
    const svgHeight = 300;

    // 텍스트 요소의 폰트 및 크기 설정
    const fontSizeTitle = 20;
    const fontSizeDescription = 16;

    // 제목과 설명이 넘어갈 수 있는 최대 너비 설정
    const maxTitleWidth = 400; // 예시로 설정한 값
    const maxDescriptionWidth = 400; // 예시로 설정한 값

    // 제목과 설명을 줄이고 생략 (...) 처리하는 함수
    const shortenText = (text, maxWidth) => {
        const dummySVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const dummyText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dummyText.textContent = text;
        dummyText.setAttribute('font-size', fontSizeTitle); // 폰트 사이즈 설정
        dummySVG.appendChild(dummyText);
        document.body.appendChild(dummySVG);
        const textWidth = dummyText.getBBox().width; // 텍스트의 너비 계산
        document.body.removeChild(dummySVG);

        if (textWidth > maxWidth) {
            // 너비를 넘어가는 경우 생략 (...) 처리
            let trimmedText = text;
            while (dummyText.getBBox().width > maxWidth) {
                trimmedText = trimmedText.slice(0, -1);
                dummyText.textContent = trimmedText + '...';
            }
            return trimmedText + '...';
        }
        return text;
    };

    const shortenedTitle = shortenText(title, maxTitleWidth);
    const shortenedDescription = shortenText(short_description, maxDescriptionWidth);

    // SVG 문자열 생성
    const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}" style="width: 100%; height: auto;">
        <rect width="100%" height="100%" fill="#eee" rx="15" ry="15" />
        <image xlink:href="${thumbnail}" width="100%" height="65%" x="0" y="0" preserveAspectRatio="xMidYMid slice" />

        <!-- 제목을 텍스트 요소로 표시 -->
        <text x="5%" y="20%" font-family="Arial" font-size="${fontSizeTitle}" fill="#333">${shortenedTitle}</text>

        <!-- 설명을 텍스트 요소로 표시 -->
        <text x="5%" y="30%" font-family="Arial" font-size="${fontSizeDescription}" fill="#333">${shortenedDescription}</text>

        <rect width="100%" height="100%" stroke="#333" stroke-width="2" fill="none" rx="15" ry="15" />
    </svg>
  `;

    // SVG를 HTML에 추가
    appendSVG(svgString);
};

// SVG 생성 함수 호출
createPostcardSVG("Title", "thumbnail.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
