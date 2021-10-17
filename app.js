const quiz = [
  {
    question: 'スターウォーズ第一作が公開された1977年当時、フランスで行われていた死刑は次の内どれ？',
    answers: [
      'ギロチン','圧殺','投身','機関銃'
    ],
    correct: 'ギロチン'
  },{
    question: 'パフェの語源は次の内どれ？',
    answers: [
      'パーティー&フェス','パルファム','パーフェクト','パンツフェチ'
    ],
    correct: 'パーフェクト'
  },{
    question: '道路標識で見かける「東京まで〇km」は東京のどこまでの距離？',
    answers: [
      '東京都渋谷区神宮前','東京都港区六本木','東京都千代田区丸の内','東京都中央区日本橋'
    ],
    correct: '東京都中央区日本橋'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

// const question = 'スターウォーズ第一作が公開された1977年当時、フランスで行われていた死刑は次の内どれ？';
// const answers = ['ギロチン','圧殺','投身','機関銃'];

// const correct = 'ギロチン';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題
const setupQuiz = () => {
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;

}};

setupQuiz();
let score = 0;

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
// 問題数があればこちらを実行
setupQuiz();
  } else{
// 問題数がなければこちらを実行
window.alert('終了。あなたの正解数は' + score + '/' + quizLength + 'です！' );
  }

}

let handleIndex = 0;
while (handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click',(e) =>{
    clickHandler(e);
  });
  handleIndex++;
};
