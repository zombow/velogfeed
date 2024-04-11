# velogfeed

> https://github.com/eungyeole/velog-readme-stats 를 보고 저의 상황에맞게 수정하여 사용중입니다.

### Velog에 작성된 나의게시글을 가져오는 API
> Gitpage의 Blog페이지에 Card형태로 디자인하기위해 제작한 API입니다
>
> Velog의 RSS를 직접 Gitpage에서 사용하면 Cros에 위반되어 사용할수없어  
> RSS를 받아오는 사이트를 호스팅하여 Gitpage에서 API로 사용합니다.

---

### 호스팅
#### Vercel
![image](https://github.com/zombow/velogfeed/assets/82148187/1f0c5b7c-cd2b-4844-8c71-dcf83befb930)

> 간단하게 사용할수있는 Vercel을 이용하여 RSS를 받아오도록 호스팅하였습니다.

---

### 사용예시
```
<script>
  fetch('https://velogfeed.vercel.app/api/feed?username=dksduddnr33&postnum=6')
    .then(res => res.json())
    .then(postinfoList => {
      const feedElement = document.getElementById('feed');
      postinfoList.forEach((postinfo) => {
        const svg = postinfo.svg;
        const url = postinfo.url;
        const cardHtml = `
          <div style="text-align: center;">
            <a href="${url}">${svg}</a>
          </div>
        `;
        feedElement.innerHTML += cardHtml;
      });
    })
    .catch(error => console.error(error));
</script>
```

> https://velogfeed.vercel.app/api/feed?username=dksduddnr33&postnum=6

markdown 파일에서 [가져올 아이디]&[가져올게시물의 수]로 가져올수있습니다.

---

### 결과

![image](https://github.com/zombow/velogfeed/assets/82148187/1e86bf26-5b94-4404-bbd7-37ddca9b9f3c)

다음과 같은 Card형태로 반환되어 배치됩니다


---
### 주의점
모든 API내의 동작이 완전히 개인용도를 위해 제작되어 (font, 사용방법 등등)
다른프로젝트에서 쓰기엔 적절하지않을수있습니다.

