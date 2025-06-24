const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');



menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('hidden');
});

const cards = document.querySelectorAll(".card");
const gameOverOverlay = document.getElementById("gameOverOverlay");
const gameWinOverlay = document.getElementById("gameWinOverlay");
/*순서대로
맞춘 카드 개수에 해당하는 변수
비교중인 카드 두개 
카드 뒤집느 중일때 입력 막을 불 변수
시간 제한 변수
*/
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let timer; // 시간제한 변수

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");// 카드뒤집을때 효과
        if(!cardOne) {
            return cardOne = clickedCard;// 첫번째 카드
        }
        cardTwo = clickedCard; // 두번째 카드
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg); // 두 카드가 맞는지를 비교
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {// 두 카드가 맞으면 matched를 1 더함
        matched++;
        if(matched === 8) {
            clearTimeout(timer); // 시간 제한 제거
            setTimeout(() => {
                gameWinOverlay.classList.remove("hidden"); // 승리 화면 표시
            }, 800);
        }
        cardOne.removeEventListener("click", flipCard);// 더이상 클릭안되도록 이벤트 제거
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; // 카드 저장 초기화화
        return disableDeck = false; //이제 입력가능하도록 제한 풀기
    }
    setTimeout(() => { // 일치하지 않으면 0.4초후에 틀렸다는 애니메이션 제공(시각적 효과과)
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
/*1.2초후 실제로 뒤집고 입력 해제제*/
    setTimeout(() => { 
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
/*게임을 초기화해주는 함수 */ 
function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `../media/img_${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });    clearTimeout(timer);

    timer = setTimeout(() => {
        gameOverOverlay.classList.remove("hidden");
        cards.forEach(card => card.removeEventListener("click", flipCard));
    }, 60000); // 60,000ms = 60초
}
//재시작함수-> 게임오버와 게임승리 사진을 가리기위한 함수
function restartGame() {
    shuffleCard();
    document.getElementById("gameOverOverlay").classList.add("hidden");
    document.getElementById("gameWinOverlay").classList.add("hidden");
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});