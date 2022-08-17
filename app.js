// Тоглогчийн ээлжийг хадгалах хувьсагч , 1р тоглогчийг 0 , 2р тоглогчийг 1 гэнэ
var activePlayer = 0;  

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


// Шоог шидэх eventlistener 
document.querySelector('.btn-roll').addEventListener('click' , function(){
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
});
