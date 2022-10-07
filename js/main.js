let btn = document.querySelector("button");
let skills = document.querySelector(".skills");
let progress = document.querySelectorAll('.progr-bars span');


function ScrollButton(){
    window.onscroll = function () {
        if (window.scrollY >= 500) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };
    
    btn.onclick = function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        });
    };
}

ScrollButton();

window.onscroll = function () { 
    if (window.scrollY >= skills.offsetTop - 250) {
        progress.forEach((progress) => { 
            progress.style.width = progress.dataset.progress;
        });
    }
};