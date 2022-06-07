const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 1 + "px";
});

VanillaTilt.init(document.querySelector(".card2"), {
    max: 25,
    speed: 400
});