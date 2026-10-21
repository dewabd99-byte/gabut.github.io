const mainBar = document.querySelector('.main-bar');
document.querySelector('#menu-bar').onclick = () => {
    mainBar.classList.toggle('active');
};

const hm = document.querySelector('#menu-bar');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !mainBar.contains(e.target)) {
        mainBar.classList.remove('active')
    }
})

let body = document.body
let demo = document.getElementById('demo')
function rgb() {
    body.classList.toggle('rgb')
}

const text = "SMK NEGERI 1 KOLAKA";
const typingText = document.querySelector(".typing-text")
let index = 0

function type() {
    if (index < text.length) {
        typingText.innerHTML += text[index]
        index++
        setTimeout(type, 80)
    }
}

requestAnimationFrame(type)