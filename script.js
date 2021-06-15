const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Next button click event
nextBtn.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

// Previous button click event
prevBtn.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    // adds or removes active class from the circles
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".active");
    
    // Changing the length of the active progress bar (blue)
    // Without "-1" it gives us higher %, then we need
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    // Enable or disable buttons
    if(currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}