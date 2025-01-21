
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');

        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-card');

        }
    })
});

const hiddenElements2 = document.querySelectorAll('.hidden-card');
hiddenElements2.forEach((el) => observer2.observe(el));


const ham = document.querySelectorAll('.ham')
const list = document.getElementById('lista');
const closee = document.getElementById('close-button');
ham.forEach((x) => {
    x.onclick = () => {
        list.classList.toggle('menu-show');
        closee.classList.toggle('cl-show');
    }
})