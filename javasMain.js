
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const menuList = document.getElementById('menuList');
  const backgroundElement = document.getElementById('background_image');

  // 메뉴를 누르면 등장+ 사라지게 표현현
  menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('hidden');
  });

  //이미지 변경을 위한 이미지 리스트~
  const backgroundImages = [

    '../media/sunshenman_garden1.jpg',
    '../media/sunshenman1.jpg',
    '../media/sunshenman2.jpg',
    '../media/sunshenman3.jpg'
  ];

  let currentIndex = 0;
 //이미지 변경함수 -> 실행하면 다음 인덱스의 사진을 가져와 배경에 적용시킨다.
  function changeBackground() {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    backgroundElement.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
  }

  // 5초마다 이미지 변경함수를 실행한다.
  setInterval(changeBackground, 5000);
});
