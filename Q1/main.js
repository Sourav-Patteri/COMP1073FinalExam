// JavaScript Document

let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');
let input = document.querySelector('input[type=text]');

submitButton.addEventListener('click', function(e) {
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^=');
  e.preventDefault();
});