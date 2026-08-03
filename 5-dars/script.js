const loginPage=document.getElementById("loginPage");
const quizPage=document.getElementById("quizPage");
const resultPage=document.getElementById("resultPage");

const username=document.getElementById("username");
const startBtn=document.getElementById("startBtn");

const playerName=document.getElementById("playerName");
const question=document.getElementById("question");
const answers=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");

const timer=document.getElementById("timer");
const progressBar=document.getElementById("progressBar");
const questionNumber=document.getElementById("questionNumber");

const finalName=document.getElementById("finalName");
const correctAnswer=document.getElementById("correctAnswer");
const wrongAnswer=document.getElementById("wrongAnswer");
const score=document.getElementById("score");
const percent=document.getElementById("percent");

let currentQuestion=0;
let scoreCount=0;
let selected=false;

let time=10;
let interval;

startBtn.onclick=function(){

if(username.value.trim()==""){
alert("Ismingizni kiriting!");
return;
}

loginPage.classList.add("hide");
quizPage.classList.remove("hide");

playerName.innerHTML=username.value;

loadQuestion();

}

function loadQuestion(){

clearInterval(interval);

time=10;

timer.innerHTML=time;

selected=false;

nextBtn.disabled=true;

let q=questions[currentQuestion];

questionNumber.innerHTML=currentQuestion+1;

question.innerHTML=q.question;

answers.innerHTML="";

q.answers.forEach((ans,index)=>{

let div=document.createElement("div");

div.className="answer";

div.innerHTML=ans;

div.onclick=()=>selectAnswer(div,index);

answers.appendChild(div);

});

progressBar.style.width=((currentQuestion)/questions.length)*100+"%";

interval=setInterval(updateTimer,1000);

}

function updateTimer(){

time--;

timer.innerHTML=time;

if(time<=0){

clearInterval(interval);

nextQuestion();

}

}

function selectAnswer(element,index){

if(selected)return;

selected=true;

nextBtn.disabled=false;

let q=questions[currentQuestion];

let all=document.querySelectorAll(".answer");

all.forEach(a=>a.style.pointerEvents="none");

if(index==q.correct){

element.classList.add("correct");

scoreCount++;

}else{

element.classList.add("wrong");

all[q.correct].classList.add("correct");

}

}

nextBtn.onclick=function(){

nextQuestion();

}

function nextQuestion(){

clearInterval(interval);

currentQuestion++;

if(currentQuestion>=questions.length){

finishQuiz();

return;

}

loadQuestion();

}

function finishQuiz(){

quizPage.classList.add("hide");

resultPage.classList.remove("hide");

let wrong=questions.length-scoreCount;

let ball=Math.round(scoreCount/questions.length*100);

finalName.innerHTML="👤 "+username.value;

correctAnswer.innerHTML="✅ To'g'ri javoblar : "+scoreCount;

wrongAnswer.innerHTML="❌ Noto'g'ri javoblar : "+wrong;

score.innerHTML="🎯 Ball : "+ball;

percent.innerHTML="📊 Foiz : "+ball+"%";

}