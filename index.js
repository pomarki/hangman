
let index = 0;

const images = ['-194px 0', '-378px 0', '-598px 0', '0 -284px', '-194px -284px', '-378px -284px', '-598px -284px']

const box = document.querySelector('.box')

box.addEventListener('click', evt => {

    box.style.backgroundPosition = images[index];
    ++index

    if (index === 7) {
        index = 0
    }

})