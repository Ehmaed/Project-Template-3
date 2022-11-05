let btn = document.querySelector("button");
let skills = document.querySelector(".skills");
let progress = document.querySelectorAll('.progr-bars span');
let nums = document.querySelectorAll(".stats .col .num");
let stats = document.querySelector('.stats');
let countDown = new Date("Dec 31, 2023 23:59:59").getTime();
let element = document.querySelector(".scroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


onScrollEvent();
handleUpButtonClick();
flipTimer();

let start = false;
function onScrollEvent() {
    window.onscroll = function () {
        showUpButton();
        fillProgress();
        fillStats();
    }
    // window.addEventListener('scroll',function () {
    // });
}

function showUpButton() {
    if (window.scrollY >= 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function handleUpButtonClick() {
    btn.onclick = function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        });
    };
}

function fillProgress() {
    if (window.scrollY >= skills.offsetTop - 250) {
        progress.forEach((progress) => { 
            progress.style.width = progress.dataset.progress;
        });
    }
}

function handleStats(element) {
    let goal = element.dataset.goal;
    let count = setInterval(function () { 
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count);
        };
    }, 5000 / goal);
}

function fillStats() {
    if (!start) {
        if (window.scrollY >= stats.offsetTop - 250) {
            nums.forEach((num) => { 
                handleStats(num);
            });
            start = true;
        };
    }
}


function flipTimer() {
    let counter = setInterval(() => {
        let dateNow = new Date().getTime();
        
        // milliseconds
        let differentMillisc = countDown - dateNow;
        
        let days = Math.floor(differentMillisc / (1000 * 60 * 60 * 24));
        
        let hours = Math.floor((differentMillisc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
        let minutes = Math.floor((differentMillisc % (1000 * 60 * 60)) / (1000 * 60));
    
        let seconds = Math.floor((differentMillisc % (1000 * 60)) / 1000);
        
    
        document.querySelector(".events .time .days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".events .time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".events .time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".events .time .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (differentMillisc <= 0) {
            clearInterval(counter);
        }
    }, 1000);
}

// NOTE: another solution:

// const sec = 1000;
// const min = sec * 60;
// const hour = min * 60;
// const day = hour * 24;

// const addDay = Math.floor(dateDiff / day);
// const addHour = Math.floor((dateDiff % day) / hour);
// const addMin = Math.floor((dateDiff % hour) / min);
// const addSec = Math.floor((dateDiff % min) / sec);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    element.style.width = `${(scrollTop / height) * 100}%`;
});