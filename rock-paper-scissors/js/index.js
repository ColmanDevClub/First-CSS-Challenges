
var score = 0;
var options = [0 /*'btn-rock'*/,1/*'btn-paper'*/,2/*'btn-scissors'*/];
var myChoice;
var computerChoice;

document.querySelector('.btn-paper.pick').addEventListener('click',function(){
    play();
    document.getElementById('user_select').classList.add('btn-paper');
    document.querySelector('#user_select > span > img').src="./assets/images/icon-paper.svg";
    if (computerChoice === 0){
        score++;
    }
    else if (computerChoice === 1){
        document.getElementById('winner').textContent = "draw";

    }
    else{
        document.getElementById('winner').textContent = "lose";
        score--;
    }
    document.getElementById('score').textContent = score;


});

document.querySelector('.btn-scissors.pick').addEventListener('click',function(){
    play();
    document.getElementById('user_select').classList.add('btn-scissors');
    document.querySelector('#user_select > span > img').src="./assets/images/icon-scissors.svg";
    if (computerChoice === 1){
        score++;
    }
    else if (computerChoice === 2){
        document.getElementById('winner').textContent = 'draw';

    }
    else{
        document.getElementById('winner').textContent = 'lose';
        score--;
    }
    document.getElementById('score').textContent = score;


});
document.querySelector('.btn-rock.pick').addEventListener('click',function(){
    play();
    document.getElementById('user_select').classList.add('btn-rock');
    document.querySelector('#user_select > span > img').src="./assets/images/icon-rock.svg";
    if (computerChoice === 2){
        score++;
    }
    else if (computerChoice === 0){
        document.getElementById('winner').textContent = 'draw';

    }
    else{
        document.querySelector('#winner').textContent = 'lose';
        score--;
    }
    document.getElementById('score').textContent = score;


});

document.querySelector('#reset').addEventListener('click',function(){
    document.querySelector('.selection').style.display = 'none';
    document.querySelector('#main').style.display = 'flex';
    document.getElementById('winner').textContent = 'win';


});

document.querySelector('.btn-rules').addEventListener('click',function(){
    document.querySelector('.rules-modal').style.display = 'flex';

});
document.querySelector('#close').addEventListener('click',function(){
    document.querySelector('.rules-modal').style.display = 'none';

});

function play(){
    computerChoice = options[Math.floor(Math.random() * 3)];
    document.querySelector('.selection').style.display = 'flex';
    document.querySelector('#main').style.display = 'none';
    document.querySelector('#computer_select').classList.remove('btn-rock','btn-scissors','btn-paper');
    document.querySelector('#user_select').classList.remove('btn-rock','btn-scissors','btn-paper');


    if (computerChoice === 0){
        document.querySelector('#computer_select').classList.add('btn-rock');
        document.querySelector('#computer_select > span > img').src="./assets/images/icon-rock.svg";

    }
    else if (computerChoice === 1){
    document.querySelector('#computer_select').classList.add('btn-paper');
    document.querySelector('#computer_select > span > img').src="./assets/images/icon-paper.svg";

    }
    else{
        document.querySelector('#computer_select').classList.add('btn-scissors');
        document.querySelector('#computer_select > span > img').src="./assets/images/icon-scissors.svg";


    }

}



