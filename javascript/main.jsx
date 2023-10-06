const container = document.getElementById('headerGrid')

document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 4 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;

    container.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 300);
})