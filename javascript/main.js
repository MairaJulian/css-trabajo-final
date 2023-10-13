const container = document.getElementById('headerGrid')

document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div')
    star.classList.add('star')

    const size = Math.random() * 20 + 1
    const x = e.pageX - size / 2
    const y = e.pageY - size / 2

    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.left = `${x}px`
    star.style.top = `${y}px`

    container.appendChild(star)

    setTimeout(() => {
        star.remove();
    }, 200);
})

document.getElementById('button1').addEventListener('click', function (e) {
    e.preventDefault()
    console.log('haciendo click');
    const proyectosSection = document.getElementById('sectionTitle')
    proyectosSection.scrollIntoView({ behavior: 'smooth' })
})

  