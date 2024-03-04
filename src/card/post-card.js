<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Postcard</title>
<style>
    .postcard {
    width: 700px;
    height: 400px;
    border: 2px solid #333;
    border-radius: 15px;
    box-sizing: border-box;
    font-family: Arial;
}

    .thumbnail {
    width: 100%;
    height: 65%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

    .info {
    width: 100%;
    height: 35%;
    background-color: #eee;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px 20px;
    box-sizing: border-box;
}

    .title {
    font-size: 28px;
    font-weight: bold;
    fill: #333;
}

    .short_description {
    font-size: 22px;
    fill: #333;
}
</style>
</head>
<body>
<div class="postcard">
    <svg class="thumbnail" viewBox="0 0 700 260">
        <image xlink:href="thumbnail.jpg" width="700" height="260" preserveAspectRatio="xMidYMid slice" />
    </svg>
    <div class="info">
        <div class="title">Title</div>
        <div class="short_description">Short Description</div>
    </div>
</div>
</body>
</html>
