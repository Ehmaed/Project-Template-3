let btn = document.querySelector("button");
let skills = document.querySelector(".skills");
let progress = document.querySelectorAll('.progr-bars span');
let nums = document.querySelectorAll(".stats .col .num");
let stats = document.querySelector('.stats');

onScrollEvent();
handleUpButtonClick();

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
