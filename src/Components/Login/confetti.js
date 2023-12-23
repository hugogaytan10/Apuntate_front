import confetti from "https://cdn.skypack.dev/canvas-confetti@1.9.2";
const confettiBtn = document.querySelector(".canvas-confetti-btn");
let exploding = false;

const defaults = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
};



export const clickBtn = async () => {
    if (exploding) {
        return;
    }
    exploding = true;
    var end = Date.now() + (1 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
   

}