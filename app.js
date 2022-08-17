// Тоглогчийн ээлжийг хадгалах хувьсагч , 1р тоглогчийг 0 , 2р тоглогчийг 1 гэнэ
var activePlayer = 1;  

// Тоглогчдын цуглуулсан оноог цуглуулах хувьсагч
var scores = [0 , 0 ];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч , 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэнэ 





// Программ эхлэхэд бэлтгэнэ
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';


document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click' , function(){
    var diceNumber = Math.floor(Math.random()*6)+1; 
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber + '.png';
});
