// 'use strict';
//jshint esversion:6
let score0 = 0;
let score1 = 0;
let current0 = 0;
let current1 = 0;

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const current_0 = document.querySelector('#current--0');
const current_1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0').classList;
const player1 = document.querySelector('.player--1').classList;
const newGame = document.querySelector('.btn--new');

roll.addEventListener('click', function () {

if (Number(current_0.textContent) < 100 && Number(current_1.textContent) < 100){
  let img = Math.floor(Math.random() * 6 + 1);
  document.querySelector('.dice').setAttribute('src', 'dice-'+img+'.png');

  if (player0.contains('player--active')) {
    if (img === 1) {
      score0 *= 0;
      player0.remove('player--active');
      player1.add('player--active');
    } else {
      score0 += img;
    }
    score_0.textContent = score0;
  } else {
    if (img === 1) {
      score1 *= 0;
      player0.add('player--active');
      player1.remove('player--active');
    } else {
      score1 += img;
    }
    score_1.textContent = score1;
  }
} else if (Number(current_0.textContent) >= 100) {
  player0.add('player--active');
  player1.remove('player--active');
  document.querySelector('#name--0').textContent = 'I Win!';

} else if (Number(current_1.textContent >= 100)){
  player0.remove('player--active');
  player1.add('player--active');
  document.querySelector('#name--1').textContent = 'I Win!';
}
});

hold.addEventListener('click', function () {
  if (Number(current_0.textContent) < 100 && Number(current_1.textContent) < 100){
    if (player0.contains('player--active')) {
      current_0.textContent = Number(current_0.textContent) + score0;
      score0 = 0;
    } else {
      current_1.textContent = Number(current_1.textContent) + score1;
      score1 = 0;
    }
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.player--0').classList.toggle('player--active');
  } else if (Number(current_0.textContent) >= 100) {
    player0.add('player--active');
    player1.remove('player--active');
    document.querySelector('#name--0').textContent = 'I Win!';

  } else if (Number(current_1.textContent >= 100)){
    player0.remove('player--active');
    player1.add('player--active');
    document.querySelector('#name--1').textContent = 'I Win!';
  }

});

newGame.addEventListener('click', function () {
  score_0.textContent = 0;
  score_1.textContent = 0;
  current_0.textContent = 0;
  current_1.textContent = 0;
});
