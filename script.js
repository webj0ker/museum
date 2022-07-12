const arrSrc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const gallery = document.querySelector('.gallery__pictures');

function rndImage(arrSrc) {
    arrSrc.sort(() => Math.random() - 0.5);
    arrSrc.forEach(element => {
        let img = document.createElement('IMG');
        img.src = `assets/img/galery/galery${element}.jpg`;
        img.setAttribute('alt', `galery${element}`);
        img.classList.add('gallery__picture');
        gallery.appendChild(img)
    });
};

rndImage(arrSrc)



const coverElem = document.getElementById('cover');
const feedbackButton = document.getElementById('leave-feedback');
const formElem = document.getElementById('form-feedback');
const buttonClose = document.getElementById('pop-up__close');

const buttonDonate = document.getElementById('donate');
const stepOne = document.getElementById('step-one');
const stepTwo = document.getElementById('step-two');
const money = document.getElementById('money');

function backToStep1() {
    stepOne.classList.remove('hidden');
    stepTwo.classList.add('hidden');
}


feedbackButton.addEventListener('click', () => {
    // document.body.classList.add('not-scroll');
    coverElem.classList.remove('hidden');
    formElem.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
    document.body.classList.remove('not-scroll');
    coverElem.classList.add('hidden');
    formElem.classList.add('hidden');
    backToStep1();
});

buttonClose.addEventListener('click', () => {
    document.body.classList.remove('not-scroll');
    coverElem.classList.add('hidden');
    formElem.classList.add('hidden');
    backToStep1();
});




// Слайдер

const btnPrev = document.querySelector(".btn-prev"),
    btnNext = document.querySelector(".btn-next"),
    slides = document.querySelectorAll(".carousel__slide"),
    dots = document.querySelectorAll(".carousel__control-dot"),
    numTotal = document.querySelector(".carousel__control-num-total"),
    numCurrent = document.querySelector(".carousel__control-num-current");
let index = 0,
    swipe = document.querySelector(".carousel__container");
numTotal.innerHTML = "0" + slides.length, numCurrent.innerHTML = "0" + (index + 1);
const activeSlide = e => {
        for (slide of slides) slide.classList.remove("point-active");
        slides[e].classList.add("point-active")
    },
    activeDot = e => {
        for (dot of dots) dot.classList.remove("point-active");
        dots[e].classList.add("point-active")
    },
    prepareSlide = e => {
        activeSlide(e),
            activeDot(e),
            numCurrent.innerHTML = "0" + (e + 1)
    },
    nextSlide = () => {
        index == slides.length - 1 ? (index = 0, prepareSlide(index)) : (index++, prepareSlide(index))
    },
    prevSlide = () => {
        0 == index ? (index = slides.length - 1, prepareSlide(index)) : (index--, prepareSlide(index))
    };
dots.forEach((e, t) => {
    e.addEventListener("click", () => {
        index = t,
            prepareSlide(index)
    })
});
const swipedetect = e => {
    let t = e,
        o = 0,
        n = 0,
        l = 0,
        i = 0,
        r = 0,
        d = 0;
    t.addEventListener("mousedown", (function(e) {
            o = e.pageX, n = e.pageY, r = (new Date).getTime(), e.preventDefault()
        })),
        t.addEventListener("mouseup", (function(e) {
            l = e.pageX - o, i = e.pageY - n, d = (new Date).getTime() - r, d <= 300 && Math.abs(l) > 150 && Math.abs(i) <= 100 && (l > 0 ? prevSlide() : nextSlide()), e.preventDefault()
        })),
        t.addEventListener("touchstart", (function(e) {
            let t = e.changedTouches[0];
            o = t.pageX, n = t.pageY, r = (new Date).getTime(), e.preventDefault()
        })),
        t.addEventListener("touchmove", (function(e) {
            e.preventDefault()
        })),
        t.addEventListener("touchend", (function(e) {
            let t = e.changedTouches[0];
            l = t.pageX - o, i = t.pageY - n, d = (new Date).getTime() - r, d <= 300 && Math.abs(l) > 150 && Math.abs(i) <= 100 && (l > 0 ? prevSlide() : nextSlide()), e.preventDefault()
        }))
};
swipedetect(swipe), btnNext.addEventListener("click", nextSlide), btnPrev.addEventListener("click", prevSlide);



const ticketContainer = document.querySelector('.ticket__container');
const ticketPermanent = document.querySelector('#exhibition1');
const ticketTemporary = document.querySelector('#exhibition2');
const ticketCombined = document.querySelector('#exhibition3');
const inputBasic = document.querySelector('#input__basic');
const inputSenior = document.querySelector('#input__senior');
const totalPrice = document.querySelector('.total-price');
const amount = document.querySelector('.amount__wrapper');

let elValue = 20;
let total = 0;

ticketContainer.addEventListener('change', event => {

    elValue = event.target.value
    total = elValue * inputBasic.value + elValue / 2 * inputSenior.value;
    totalPrice.innerHTML = total
})

amount.addEventListener('click', event => {

    total = elValue * inputBasic.value + elValue / 2 * inputSenior.value;
    totalPrice.innerHTML = total

})