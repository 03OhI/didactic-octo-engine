  const menuToggle = document.getElementById('menuToggle');
  const menuList = document.getElementById('menuList');
  const backgroundElement = document.getElementById('background_image');


  menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('hidden');
  });


  // 객체안의 이미지 주소와 div태그 안에 넣을 코드 정리(글과 표표)
  const imageData = {
    sun: {
        img: "../media/sunshenman1.jpg",
        src: "https://scbay.suncheon.go.kr/wetland/",
        html: `
        <p><span><b>-순천만습지-</b></span></p>
        <p>남해안 중앙에 위치한 순천만습지는 여수반도와 고흥반도가 에워싼 <span>항아리 모양</span>을 하고 있다.<br>
        순천시내를 관통하는 동천과 상사면에서부터 흘러온 이사천이 만나는 지점에서부터 하구까지 
        약 3㎞ 길이의 강을 따라 <span>5.4㎢의 갈대와 22.6㎢의 갯벌</span>이 형성되어 있다.<br>
        순천만은 한국에서 갯벌이 만들어지는 전 과정을 볼 수 있는 <span>유일한 연안습지</span>이다.<br><br></p>
        <table border="1"><caption>입장 가격 및 입장 시간</caption>
            <thead><tr><td>가격</td><td>계절</td><td>매표(입장)시간</td></tr></thead>
            <tbody><tr><td>어린이 5000</td><td>11-2월</td><td>8:00-17:00</td></tr>
            <tr><td>청소년,군인 7000</td><td> 3-4월, 9-10월 </td><td>8:00-18:00</td></tr>
            <tr><td>성인 10000</td><td>5-8월</td><td>8:00-19:00</td></tr></tbody>
        </table><br><br>
        `
    },
    garden: {
        img: "../media/sunshenman_garden1.jpg",
        src: "https://scbay.suncheon.go.kr/garden/",
        html: `
        <p><span><b>-순천국가가만정원-</b></span></p>
        <p>2013년 4월 20일부터 10월 20일까지 순천만국제정원박람회를 개최하게 되면서 조성되었다.<br>
        2013년 4월 20일부터 10월 20일까지 6개월간 개장된 <span>국제 공인 정원박람회</span>로, 
        국제원예박람회 인증기구인 국제원예생산자협회(AIPH)의 승인으로 2009년 9월 16일 유치가 확정되었다.<br>
        박람회가 폐막한 뒤 2014년 4월 20일에 순천만정원이라는 이름으로 <span>영구적으로 개장</span>하였고,
         2015년 9월 5일에 <span>국가정원 1호로 지정</span>되었다.2020년 3월, 「2023순천만국제정원박람회」 유치에 성공했다.<br><br></P>
        
         <table border="1"><caption>입장 가격 및 입장 시간</caption>
            <thead><tr><td>가격</td><td>기간</td><td>입장시간</td></tr></thead>
            <tbody><tr><td>어린이 5000</td><td> 매표시간 </td><td>8:00-17:00</td></tr>
            <tr><td>청소년,군인 7000</td><td> 입장시간 </td><td>8:00-18:00</td></tr>
            <tr><td>성인 10000</td><td> 휴무일 </td><td>마지막 주 월요일</td></tr></tbody>
        </table><br><br>
        `
    },
    nagan: {
        img: "../media/Naganeupseong Walled Town.jpg",
        src: "https://www.suncheon.go.kr/nagan/",
        html: `
        <p><span><b>-낙안읍성-</b></span></p>
        <p>순천 낙안읍성은 조선시대 대표적인 지방계획도시로 <span>대한민국 3대 읍성 중 하나</span>로 사적 제302호로 지정되어 있으며 
        연간 120만명의 관광객이 방문하는 주요 관광지로 현재 세계문화유산 잠정목록 등재 및 CNN선정 <span>대한민국 대표 관광지 16위</span>로 선정되었다.<br>
        290여동의 초가집에 100여세대 230여명의 주민이 사는 마을이다.<br>
        조선시대부터 현재에 이르기까지 조상들의 삶의 모습이 오롯이 이어져 옛 정취를 여유롭게 느껴볼 수 있다.<br><br></p>

        <table border="1"><caption>입장 가격 및 매표 시간</caption>
            <thead><tr><td>가격</td><td>기간</td><td> 시간 </td></tr></thead>
            <tbody><tr><td>어린이 1500</td><td> 11월-1월 </td><td>9:00-17:30</td></tr>
            <tr><td>청소년,군인 2500</td><td> 2월-4월, 10월 </td><td>9:00-18:00</td></tr>
            <tr><td>성인 4000</td><td>5-9월</td><td>8:30-18:30 </td></tr></tbody>
        </table>        <br><br>
        `
    },
    drama: {
        img: "../media/set_for_suncheon_Drama2.jpg",
        src: "https://www.suncheon.go.kr/tour/tourist/0005/",
        html: `
        <p><span><b>-순천 드라마 촬영장-</b></span></p>
        <p>순천드라마 촬영장은 순천읍 세트, 서울 변두리 세트, 서울 달동네 세트로 크게 세 부분으로 나뉜다. <br>
        <span>순천읍 세트</span>는 1950년대 후반부터 1960년대 초반의 소도시 읍내와 1960년대 중반부터 1970년대의 번화가를 재현한 세트장으로 
        1960~1970년대의 지방 소도시의 모습을 느낄 수 있는 곳이다.
         자전거포, 불조심 글자가 크게 써진 소방서, 전봇대 끝에 달린 파란색 확성기 등의 풍경이 있다. <br>
        <span>서울 변두리 세트</span>는 회색빛 2층 건물들이 늘어선 서울의 1980년대 변두리 번화가이다.
        ‘새마을 상회’, ‘미용실’, ‘고급다방 루비’의 간판 등과 한쪽 벽에 내걸린 ‘딸, 아들 구별 말고 둘만 낳아 잘 기르자’라는 보건사회부와
        대한가족계획협회의 홍보 현수막도 당시의 시대상을 반영하고 있다.<br>
        이곳은 <span>전국 유일의 서울 달동네 세트장</span>이다.
        녹슨 아궁이와 까만색 연탄들, 삿갓을 씌운 가로등과 전봇대 주변의 쌓여 있는 연탄재들, 빛바랜 벽보들이 그대로 남아 있다.</p>

         <table border="1"><caption>입장 가격 및 입장 시간</caption>
            <thead><tr><td>가격</td><td>기간</td><td>입장시간</td></tr></thead>
            <tbody><tr><td>어린이 800</td><td> 매표시간 </td><td>8:00-17:00</td></tr>
            <tr><td>청소년,군인 1500</td><td> 입장시간 </td><td>8:00-18:00</td></tr>
            <tr><td>성인 3000</td><td> 휴무일 </td><td>없음</td></tr></tbody>
        </table><br><br>
        `
    }
  };



const imageEl = document.getElementById("mainImage");
const textGroup = document.querySelector('.textGroup p');

  let imgLink = "";

imageEl.addEventListener("click", () => {
    if (imgLink) {
        window.open(imgLink, "_blank");
    }
}); 

// 사용할 id 배열과 이미지, 글을 변경하는 함수 작성!
const ids = ['sun', 'garden', 'nagan', 'drama'];

ids.forEach(id => {
    const button = document.getElementById(id);

    button.addEventListener("click", () => {
        const data = imageData[id];

        imgLink = data.src;

        imageEl.src = data.img;
        imageEl.classList.remove("showImg");
        void imageEl.offsetWidth;
        imageEl.classList.add("showImg");

        textGroup.innerHTML = data.html;
        const paragraphs = textGroup.querySelectorAll("p, table");
        paragraphs.forEach((el, index) => {
            el.style.opacity = "0";
            el.style.animation = "fadeUp 1s ease-out forwards";
            el.style.animationDelay = `${(index + 1)}s`;
        });
    });
});
