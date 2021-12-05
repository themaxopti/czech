const navbar = document.querySelector('.navbar')
const titles = document.querySelector('.header_wrap__mobile__titles')

let isNavbar = true

console.log(isNavbar)

navbar.addEventListener('click', (e) => {

    isNavbar = !isNavbar


    if (isNavbar) { document.body.style.overflowY = 'visible' } else {
        document.body.style.overflowY = 'hidden'
    }
    console.log(isNavbar)


    titles.style.top = `${isNavbar ? '-120%' : '60px'}`
})

const anchors = document.querySelectorAll('a[href*="#"].mobileOn')
console.log(anchors)

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        console.log('ttt')

        const blockID = anchor.getAttribute('href').substr(1)
        isNavbar = true
        fakeHeaderWrap.style.top = '-120%'
        document.body.style.overflowY = 'visible'
        console.log('vustrel')
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            top:'100px'
        })
    })
}



const anchors2 = document.querySelectorAll('a[href*="#"].mobileAn')

for (let anchor of anchors2) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        console.log('ttt')

        const blockID = anchor.getAttribute('href').substr(1)
        isNavbar = true
        titles.style.top = '-120%'
        document.body.style.overflowY = 'visible'
        console.log('vustrel')
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            top:'100px'
        })
    })
}