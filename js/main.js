let btn = document.querySelector("button");
let skills = document.querySelector(".skills");
let progress = document.querySelectorAll('.progr-bars span');

onScrollEvent();
handleUpButtonClick();


function onScrollEvent() {
    window.onscroll = function () {
        showUpButton();
        fillProgress();
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

