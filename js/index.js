$(document).ready(function (e) {

    $('.test_slick').slick({
        slidesToShow: 2,
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    });

});


const nav = document.querySelectorAll('.menu__navbar')
const fakeHeaderWrap = document.querySelector('.fake_header__wrap')


let isClose = true

nav.forEach(e => {
    e.addEventListener('click', () => {
      

        isClose = !isClose

        if (isClose) { document.body.style.overflowY = 'visible' }else{
            document.body.style.overflowY = 'hidden'
        }
        fakeHeaderWrap.style.top = `${isClose ? '-120%' : '0px'}`
    })
})


const form = document.querySelector('.test__form')

function submitHandler(e) {
    e.preventDefault()
    const errors = []
    const name = e.target.name
    const surrname = e.target.surrname
    const email = e.target.email
    console.log(name, surrname)
    if (name.value < 2) {
        errors.push('Заполните имя корректно')
        console.log(1)
    }

    if (surrname.value < 2) {
        errors.push('Заполните фамилию корректно')
    }

    if (email.value < 2) {
        errors.push('Заполните email корректно')
    }
    console.log(errors)


    if (errors.length > 1) {
        const p = document.querySelector('.error')

        p.innerHTML = errors.map(e => e).join('<br/>')
        return
    }
    name.value = ''
    surrname.value = ''
    email.value = ''
    const p = document.querySelector('.error')
    p.style.color = 'green'
    p.innerHTML = 'Регестрация прошла успешно'

    console.log(name)
}

form.addEventListener('submit', submitHandler)

const form2 = document.querySelector('.form')

form2.addEventListener('submit', (e) => {
    e.preventDefault()
    const errors = []
    const name = e.target.name
    const surrname = e.target.surrname
    const email = e.target.email
    console.log(name, surrname)
    if (name.value < 2) {
        errors.push('Заполните имя корректно')
        console.log(1)
    }

    if (surrname.value < 2) {
        errors.push('Заполните фамилию корректно')
    }

    if (email.value < 2) {
        errors.push('Заполните email корректно')
    }
    console.log(errors)


    if (errors.length > 1) {
        const p = document.querySelector('.error2')

        p.innerHTML = errors.map(e => e).join('<br/>')
        return
    }
    name.value = ''
    surrname.value = ''
    email.value = ''
    const p = document.querySelector('.error2')
    p.style.color = 'green'
    p.innerHTML = 'Регестрация прошла успешно'

    console.log(name)
})


const navbar6 = document.querySelector('.navbar')

const scrollY = Math.round(window.scrollY);

const fullscreen = document.querySelector('.fullscreen')
const headerMob = document.querySelector('.section_header_mob')



function scroll() {
    if (window.pageYOffset > fullscreen.offsetHeight) {
    }
    if (window.pageYOffset < fullscreen.offsetHeight) {

    }
}

scroll()


window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > fullscreen.offsetHeight) {
        headerMob.classList.add('pol')
    }
    if (window.pageYOffset < fullscreen.offsetHeight) {

        headerMob.classList.remove('pol')
    }
})


function scrolly(e){

}