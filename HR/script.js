document.addEventListener("DOMContentLoaded", function() {
    const balloons = document.querySelectorAll('.balloon');
    const speed = 2;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function animateBalloon(balloon, startX, startY) {
        let x = startX;
        let y = startY;
        balloon.style.backgroundColor = getRandomColor();

        function move() {
            y -= speed;
            if (y < -70) { // إذا خرجت البالونة من الشاشة
                y = window.innerHeight;
                x = Math.random() * window.innerWidth;
                balloon.style.backgroundColor = getRandomColor();
            }
            balloon.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(move);
        }

        move();
    }

    balloons.forEach((balloon, index) => {
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + Math.random() * 200;
        animateBalloon(balloon, startX, startY);
    });
});
