function checkpassword(){
    var passwordInput = document.getElementById("password").value;
var userInput = document.getElementById("username").value;
console.log("username and password check");
if(passwordInput=="Admin@1234"&&userInput=="Admin"){
   alert("Password Verified");
   console.log("Before redirection");
   window.open("dashboard.html","blank")
   console.log("After redirection");
}
else{
    alert("Check creditials");
}

}
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    console.log("Next Button is clicked")
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
