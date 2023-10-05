const quotes = [
  {
    quote : "경청하고 대답을 잘 해주는 것은 대화술에서 인간이 다다를 수 있는 최고의 경지이다.",
    author: "프랑수아 드 라 로슈푸코",
  },
  {
    quote : "돈은 내게 큰 동기가 아니라 단지 점수였다. 진짜 재미는 게임을 즐기는 것이다.",
    author : "도널드 트럼프",
  },
  {
    quote : "우연이 아닌 선택이 운명을 결정한다.",
    author : "진 니데치",
  },
  {
    quote : "인간이란 습관들이기 나름인가보다!",
    author : "윌리엄 셰익스피어",
  },
  {
    quote : "존엄은 명예를 소유하는 데 있지 않고 명예를 누릴 자격을 유지하는 데 있다.",
    author : "아리스토텔레스",
  },
  {
    quote : "과거에서도 미래에서도 살지 말고, 매일의 일과가 너의 온 힘을 흡수하고 너의 가장 원대한 야망을 충족하도록 하거라.",
    author : "윌리엄 오슬러 경",
  },
  {
    quote : "지식의 종류는 두 가지이다. 우리가 스스로 알고 있는 지식과 관련 정보를 어디서 구해야 할 지에 관한 지식이다.",
    author : "사무엘 존슨",
  },
  {
    quote : "친절한 말은 짧고 하기 쉽지만, 그 울림은 참으로 무궁무진하다.",
    author : "마더 테레사",
  },
  {
    quote : "이별의 아픔 속에서만 사랑의 깊이를 알게 된다.",
    author : "조지 앨리엇",
  },
  {
    quote : "나는 한 여자의 몸에 갇힌 한 인간일 뿐이다.",
    author : "일레인 부슬러",
  },
  {
    quote : "자신에 관해 많은 말을 함으로써 자신을 감출 수도 있다.",
    author : "프레드리히 니체",
  },
  {
    quote : "청중이 다 듣기 전에 반드시 할 말을 끝내라.",
    author : "도로시 사노프",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[parseInt(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
