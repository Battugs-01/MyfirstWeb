// Тоглоом дууссан эсэхийг хадгалах төлвийн хувьсагч
var isGameOver;

//  Тоглоомын бүх газар зарлагдах Public хувьсагчид 
var activePlayer ;
var scores ;
var roundScores;

// Шооны зургыг DoM оос хайж олж энд хадгална
var diceDom = document.querySelector('.dice');


function InitGame(){
// Тоглоом эхлэлээ гэх төлөвт оруулна
isGameOver = false;

    // Тоглогчийн ээлжийг хадгалах хувьсагч , 1р тоглогчийг 0 , 2р тоглогчийг 1 гэнэ
activePlayer = 0;  

// Тоглогчдын цуглуулсан оноог цуглуулах хувьсагч
scores = [0 , 0 ];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScores = 0;


// Программ эхлэхэд бэлтгэнэ
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';


document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// Тоглогчлдийн нэрийг буцааж хэвийн болгох
document.getElementById('name-0').textContent='Player-1';
document.getElementById('name-1').textContent='Player-2';

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');


document.querySelector('.player-0-panel').classList.add('active');



diceDom.style.display = 'none';

}
InitGame();


// Шоог шидэх eventlistener 
document.querySelector('.btn-roll').addEventListener('click' , function(){
   if(isGameOver!==true){
       // 1--6 хүртэлэх санамсаргүй тоо гаргаж авна
    var diceNumber = Math.floor(Math.random()*6)+1; 

    // Шооны зургыг web Дээр гаргаж ирнэ
    diceDom.style.display = 'block';

    // Буусан шооны тоонд харгалзах зургыг web дээр гаргаж ирнэ 
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Тоглогчийн ээлжийн оноог өөрчилнө . Буусан тоо нь нэгээс ялгаатай бол оноо нэмнэ 

    if(diceNumber!== 1){
        // 1ээс өөр тоо буусан учир тухайн тоог тоглогчийн ээлжийн оноон дээр нэмж өгнө 
        roundScores = roundScores + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScores;
    }else{
       switchtoNextPlayer();
    }
   }else{
    alert('Тоглоом дууссан байна . New Game Товчийг дарж шинээр эхлэнэ үү ');
   }
});
// Шилжилт хийх Функц 
function switchtoNextPlayer(){
    // Тоглогчийн оноог 0 болгоно
    roundScores = 0;
    document.getElementById('current-' + activePlayer).textContent =0;

   // 1 буусан учир тоглогчийн ээлж солигдоно 
    // Хэрэв идвэхтэй тоглогч нь 0 бвал 1 болгоно 
    // 1 байвал 0 болго 
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0 );

    // Тоглогчийн ээлжийн тэмдэглэгээг нөгөө тоглогч руу шилжүүлнэ
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгоно 
     diceDom.style.display = 'none';
}
// HOLD товчны eventListener
document.querySelector('.btn-hold').addEventListener('click' , function(){
    // уг тоглогчийн цуглуусан ээлжнйи оноог өөрийн оноон дээр нь нэмж өгнө
    scores[activePlayer] = scores[activePlayer] + roundScores;

       // Дэлгэц дээр оноог нь нэмж өгнө
       document.getElementById('score-' +activePlayer).textContent=scores[activePlayer];

    //  Уг тоглогч хожсон эсэхийг шалгах
    if(scores[activePlayer] >= 30){
     isGameOver = true;

        // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
        document.getElementById('name-'+activePlayer).innerHTML='<b>Winner!!</b>';
    }else{
        switchtoNextPlayer();
        // Тоглогчийн ээлжийг солино
    }
});

// Шинэ тоглоом эхлүүлэх new button ий eventlitner
document.querySelector('.btn-new').addEventListener('click',function(){
  InitGame();
});
