let username = document.querySelector('.username');
let password = document.querySelector('.password');

let countOne = document.querySelector(".count-one");
let countTwo = document.querySelector(".count-two");

let progressOne = document.querySelector(".progress-one");
let progressTwo = document.querySelector(".progress-two");


let maxLengthOne = username.getAttribute("maxlength");
let maxLengthTwo = password.getAttribute("maxlength");

countOne.innerHTML = maxLengthOne;
countTwo.innerHTML = maxLengthTwo;

username.addEventListener('input', function () { 
    countOne.innerHTML = maxLengthOne - this.value.length;
    countOne.innerHTML == 0 ? countOne.classList.add("zero") : countOne.classList.remove("zero");

    progressOne.style.width = `${(this.value.length * 100) / maxLengthOne}%`;
});

password.addEventListener('input', function () { 
    countTwo.innerHTML = maxLengthTwo - this.value.length;
    countTwo.innerHTML == 0 ? countTwo.classList.add("zero") : countTwo.classList.remove("zero");

    progressTwo.style.width = `${(this.value.length * 100) / maxLengthTwo}%`;
});