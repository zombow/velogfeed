const postcardSVG = (title, thumbnail, short_description, tags) => {
    // 패딩 값 설정
    const padding = 20;
    // 이미지의 고정된 너비와 높이 설정
    const thumbnailWidth = 410;
    const thumbnailHeight = 180;

    // 썸네일 이미지를 원하는 위치로 이동시키기 위한 좌표 설정
    const thumbnailX = 15; // 원하는 x 좌표
    const thumbnailY = 15; // 원하는 y 좌표

    // 각 태그의 사이 간격
    const tagSpacing = 5;

    // 태그를 담을 그룹 요소의 시작 y 좌표
    let tagGroupY = 205;
    let tagGroupX = padding;
    // 태그를 담을 그룹 요소 생성
    const tagsGroup = tags.map((tag, index) => {
        // 태그의 길이에 따라 동적으로 너비 계산
        const tagWidth = tag.length * 10; // 글자 수에 따라 동적으로 변경됨
        const tagHeight = 20;
        const tagX = index * (tagWidth + tagSpacing);

        return `
            <g data-testid="tag-group-${index}" transform="translate(${tagGroupX}, ${tagGroupY})">
                <rect x="0" y="0" width="${tagWidth}" height="${tagHeight}" rx="5" fill="#e9ecef" stroke="#ced4da" stroke-width="1"/>
                <text x="${tagWidth / 2}" y="${tagHeight / 2}" dominant-baseline="middle" text-anchor="middle" fill="#495057">${tag}</text>
            </g>
        `;
    });

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="440px" height="310px" fill="fffefe">
            <style>
                .header { font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #343A40; animation: fadeInAnimation 0.8s ease-in-out forwards; }
                .log-title { font: bold 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #212529 }
                .log-description { font-size: 16px; fill: #495057}
                .tag-item { font-size: 12px; fill: #0CA678;}
                .heart-count { font-size: 12px; fill: #495057;}
                .log-title:hover{ fill: #0CA678; text-decoration: underline;}
                .list-style{ font-size:14px; fill: #212529; }
            </style>
            <defs>
                <clipPath id="clip-path">
                    <rect rx="8"  width=${thumbnailWidth} height=${thumbnailHeight} />
                </clipPath>
                <!-- 그림자 효과를 위한 필터 정의 -->
                <filter id="drop-shadow" x="-20%" y="-20%" width="130%" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1"/> 
                    <feOffset dx="0.5" dy="0.5" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5"/>
                    </feComponentTransfer>
                    <feMerge> 
                        <feMergeNode/> 
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <!-- 그림자가 있는 사각형 -->
            <rect x="5" y="5" rx="5" width="430" height="300" fill="#ffffff" filter="url(#drop-shadow)" />
            <!-- 썸네일 테두리 추가 -->
            <rect x="${thumbnailX}" y="${thumbnailY}" rx="8"  width="${thumbnailWidth}" height="${thumbnailHeight}" stroke="#c6c9ce" stroke-width="1.5" fill="none" />
            <!-- 썸네일 이미지 추가 -->
            <image xlink:href="${thumbnail}" transform="translate(${thumbnailX} , ${thumbnailY})" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path)" />
            <g data-testid="card-title" transform="translate(${(430 - (430 - (padding * 2))) / 2}, 215)">
                <svg width=${430 - (padding * 2)} height="300">
                    <!-- 타이틀에 패딩 적용 -->
                    <text class="log-title" x="0" y="35" data-testid="log-title">${title}</text>
                </svg>
            </g>
            <g data-testid="card-body" transform="translate(${(430 - (430 - (padding * 2))) / 2}, 240)">
                <svg width=${430 - (padding * 2)} height="300">
                    <!-- 쇼트 디스크립션에 패딩 적용 -->
                    <text class="log-description" x="0" y="35">${short_description}</text>
                </svg>
            </g>
            <!-- 태그 추가 -->
            ${tagsGroup.join('\n')}
        </svg>
    `;
};

module.exports = postcardSVG;
