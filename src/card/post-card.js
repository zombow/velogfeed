const postcardSVG = (title, thumbnail, short_description) => {
    const strokeWidth = 2;
    const svgWidth = 700;
    const svgHeight = 400;
    const cornerRadius = 15; // 모서리의 라운드 설정

    // 썸네일 이미지의 크기와 위치를 설정합니다.
    const thumbnailWidth = svgWidth;
    const thumbnailHeight = svgHeight * 0.65;
    const thumbnailX = 0;
    const thumbnailY = 0;

    // 제목과 요약 정보 영역의 크기와 위치를 설정합니다.
    const infoWidth = svgWidth;
    const infoHeight = svgHeight * 0.35;
    const infoX = 0;
    const infoY = thumbnailHeight;

    // 현재 윈도우의 너비와 높이를 가져옵니다.
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 뷰박스의 너비와 높이를 현재 윈도우의 너비와 높이로 설정합니다.
    const viewBoxWidth = windowWidth;
    const viewBoxHeight = windowHeight;

    // viewBox의 x와 y 값을 설정합니다.
    const viewBoxX = 0;
    const viewBoxY = 0;

    // viewBox 값을 문자열로 조합합니다.
    const viewBox = `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`;

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="${viewBox}">
      <style>
        /* SVG 스타일을 여기에 추가합니다. */
        .title {
          font-family: Arial;
          font-size: 28px;
          font-weight: bold;
          fill: #333;
        }
        .short_description {
          font-family: Arial;
          font-size: 22px;
          fill: #333;
        }
        .thumbnail{
        }
      </style>
      <g transform="translate(${thumbnailX}, ${thumbnailY})">
        <!-- 썸네일 이미지 -->
        <rect x="0" y="0" width="${thumbnailWidth}" height="${thumbnailHeight}" fill="#ccc" rx="${cornerRadius}" ry="${cornerRadius}" />
        <image class="thumbnail" xlink:href="${thumbnail}" x="0" y="0" width="${thumbnailWidth}" height="${thumbnailHeight}" preserveAspectRatio="xMidYMid slice" />
      </g>
      <!-- 제목과 요약 정보 -->
      <rect x="${inf
