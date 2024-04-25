const postcardSVG = (title, thumbnail, short_description, tags, user) => {
    // 패딩 값 설정
    const padding = 20;

    // 그림자포함 전체 postCard 크기
    const postcardX = 440;
    const postcardY = 310;

    // 실제 cardBody 크기
    const cardbodyX = 430;
    const cardbodyY = 300;

    // 이미지의 고정된 너비와 높이 설정
    const thumbnailWidth = 430;
    const thumbnailHeight = 190;

    // 썸네일 이미지를 원하는 위치로 이동시키기 위한 좌표 설정
    const thumbnailX = 5;
    const thumbnailY = 5;

    // 각 태그의 사이 간격
    const tagSpacing = 5;

    // 태그를 담을 그룹 요소의 시작 y 좌표
    let tagGroupY = 274;

    // 태그를 담을 그룹 요소 생성
    const tagsGroup = [];
    let accumulatedWidth = 0;
    tags.forEach((tag, index) => {
        // 태그의 폭을 계산하는 함수 호출
        const tagWidth = calculateTagWidth(tag);
        const tagHeight = 20;
        const tagX = accumulatedWidth + padding;

        accumulatedWidth += tagWidth + tagSpacing;

        tagsGroup.push(`
            <g data-testid="tag-group-${index}" transform="translate(${tagX}, ${tagGroupY})">
                <rect x="0" y="0" width="${tagWidth}" height="${tagHeight}" rx="10" fill="#f8f9fa" />
                <text class="tag-item" x="${tagWidth / 2}" y="${tagHeight / 2}" dominant-baseline="middle" text-anchor="middle" fill="#495057">${tag}</text>
            </g>
        `);
    });

    // SVG 요소 생성
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", postcardX);
    svg.setAttribute("height", postcardY);
    svg.setAttribute("fill", "#fffefe");

    // 스타일 추가
    const style = document.createElement("style");
    style.textContent = `
        .header { font: bold 15px 'Warhaven', Sans-Serif; fill: #343A40;}
        .log-title { font: bold 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #212529 }
        .log-description { font-size: 16px; fill: #495057}
        .tag-item { font-size: 14px; fill: #12B886;}
        .heart-count { font-size: 12px; fill: #495057;}
        .log-title:hover{ fill: #12B886; text-decoration: underline;}
        .list-style{ font-size:14px; fill: #212529; }
      
        /* 호버 애니메이션 */
        .post-card-container {
            transition: transform 0.3s ease-out; /* 호버와 호버 해제에 대한 트랜지션 설정 */
        }

        .post-card-container:hover {
            transform: translateY(-5px); /* 호버될 때 위로 이동하는 애니메이션 */
        }

        /* 마우스가 빠져나갈 때 다시 원래 자리로 이동하는 애니메이션 */
        .post-card-container:not(:hover) {
            transform: translateY(0);
        }
    `;
    svg.appendChild(style);

    // 나머지 SVG 요소들 추가
    // ...

    // 태그 그룹 추가
    const tagsContainer = document.createElement("g");
    tagsContainer.innerHTML = tagsGroup.join("\n");
    svg.appendChild(tagsContainer);

    // postcard-container 요소 생성
    const postcardContainer = document.createElement("div");
    postcardContainer.classList.add("post-card-container");
    postcardContainer.appendChild(svg);

    return postcardContainer;
};

// 태그의 너비를 계산하는 함수
const calculateTagWidth = (tag) => {
    let width = 0;
    for (let i = 0; i < tag.length; i++) {
        const char = tag[i];
        // 한글인 경우
        if (/[\u3131-\uD79D]/.test(char)) {
            width += 15; // 한글 폭
        } else {
            width += 8; // 영문 및 그 외 폭
        }
    }
    return width + 23; // 간격을 추가하여 반환
};

module.exports = postcardSVG;
