const postcardSVG = (title, thumbnail, short_description, tags, user) => {
    // 패딩 값 설정
    const padding = 20;
    
    // 그림자포함 전체 postCard 크기
    const postcardX = 350;
    const postcardY = 240;

    // 실제 cardBody 크기
    const cardBodyX = 340;
    const cardBodyY = 230;
    
    // 이미지의 고정된 너비와 높이 설정
    const thumbnailWidth = 340;
    const thumbnailHeight = 140;
    
    // 썸네일 이미지를 원하는 위치로 이동시키기 위한 좌표 설정
    const thumbnailX = 3.5; 
    const thumbnailY = 3.5;

    // 각 태그의 사이 간격
    const tagSpacing = 2;

    // 태그를 담을 그룹 요소의 시작 y 좌표
    let tagGroupY = 191;
    
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

    return `
    <div class="post-card-container">
        <svg xmlns="http://www.w3.org/2000/svg" width=${postcardX} height=${postcardY} fill="fffefe">
            <style>
                @font-face {
                    font-family:'Warhaven';
                    src: url("/assets/fonts/Warhaven_OTF_Bold.otf") format('opentype')
                    ,url("/assets/fonts/Warhaven_OTF_Regular.otf") format('opentype'),
                    ,url("/assets/fonts/Warhaven_Bold.ttf") format('truetype')
                    ,url("/assets/fonts/Warhaven_Regular.ttf") format('truetype');
                }                   
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
            </style>
            <defs>
                <clipPath id="clip-path">
                    <rect rx="5"  width=${thumbnailWidth} height=${thumbnailHeight} />
                </clipPath>
                <!-- 그림자 효과를 위한 필터 정의 -->
                <filter id="drop-shadow" x="-20%" y="-20%" width="130%" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2"/> 
                    <feOffset dx="0.5" dy="0.5" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3"/>
                    </feComponentTransfer>
                    <feMerge> 
                        <feMergeNode/> 
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <!-- 그림자가 있는 사각형 -->
            <rect x="3.5" y="3.5" rx="5" width=${cardBodyX} height=${cardBodyY} fill="#ffffff" filter="url(#drop-shadow)" />
            <!-- 썸네일 이미지 추가 -->
            <image xlink:href="${thumbnail}" transform="translate(${thumbnailX} , ${thumbnailY})" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path)" />
            <g data-testid="card-username" transform="translate(${(cardBodyX - (cardBodyX - (padding * 2))) / 2}, 70%)">
                <svg width=${cardBodyX - (padding * 2)} height=${cardBodyY}>
                    <!-- 유저네임 패딩 적용 -->
                    <text class="header" x="0" y="35" data-testid="header">${user.username + ".log"}</text>
                </svg>
            </g>
            <g data-testid="card-title" transform="translate(${(cardBodyX - (cardBodyX - (padding * 2))) / 2}, 80%)">
                <svg width=${cardBodyX - (padding * 2)} height=${cardBodyY}>
                    <!-- 타이틀에 패딩 적용 -->
                    <text class="log-title" x="0" y="35" data-testid="log-title">${title}</text>
                </svg>
            </g>
            <g data-testid="card-body" transform="translate(${(cardBodyX - (cardBodyX - (padding * 2))) / 2}, 90%)">
                <svg width=${cardBodyX - (padding * 2)} height=${cardBodyY}>
                    <!-- 쇼트 디스크립션에 패딩 적용 -->
                    <text class="log-description" x="0" y="35">${short_description}</text>
                </svg>
            </g>
            <!-- 태그 추가 -->
           ${tagsGroup.join('\n')}
        </svg>
    `;
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
