// Тоглогчийн ээлжийг хадгалах хувьсагч , 1р тоглогчийг 0 , 2р тоглогчийг 1 гэнэ
var activePlayer = 1;  

// Тоглогчдын цуглуулсан оноог цуглуулах хувьсагч
var scores = [0 , 0 ];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч , 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэнэ 
var dice = Math.floor(Math.random()*6)+1; 




// Программ эхлэхэд бэлтгэнэ
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';

console.log("Шоо : " + dice);