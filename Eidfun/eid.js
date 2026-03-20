const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

let rotation = 0;

btn.onclick = () => {

    const spins = 5 + Math.floor(Math.random() * 3); // random spin
    const extraSpin = spins * 360;

    /* 🎯 Dua slice angle fix */
    const duaAngle = 30; // Dua text position

    /* adjust so pointer always lands on Dua */
    const finalAngle = 360 - duaAngle;

    rotation += extraSpin + finalAngle - (rotation % 360);

    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("videoFrame").src =
            "https://www.youtube.com/embed/S5Z_lX6nL-I?autoplay=1 ";
    }, 4500);
};

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("videoFrame").src = "";
}