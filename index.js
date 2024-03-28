const themeBtn = document.getElementById("theme-btn");
const followButton = document.getElementById("follow-btn");


themeBtn.addEventListener("click", function(){
    let element = document.body;
    let cardElement = document.querySelector(".card");
    element.classList.toggle("dark-mode");
    themeBtn.classList.toggle("theme-dark");
    cardElement.classList.toggle("dark-card");
    var theme = themeBtn.innerText || themeBtn.textContent;
    if (theme == "Dark") {
        themeBtn.innerHTML = "Light";
    } else {
        themeBtn.innerHTML = "Dark";
    }
    
});

function followBtn(event) {
    var text = event.textContent || event.innerText;
    if(text == "Follow") {
        event.innerText = "Following";
        event.style.backgroundColor = "#ff0066";
        event.style.color = "#e6e6e6";
    }else {
        event.innerText = "Follow";
        event.style.backgroundColor = "#e6e6e6";
        event.style.color = "#ff0066";
    }
    
}