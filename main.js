const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function featuredAnimation () {
    const featuredWrapper = document.querySelector("#featured-wrapper")
    const fixedImage = document.querySelector("#fixed-img")

    featuredWrapper.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block"
    })
    featuredWrapper.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none"
    })

    const elements = document.querySelectorAll(".elem")

    elements.forEach(function(el){
        el.addEventListener("mouseenter", function() {
            const image = el.getAttribute("data-image")
            fixedImage.style.backgroundImage = `url(${image})`
        })
    })
}

function menuAnimation() {
    var menu = document.querySelector("nav h4")
    var full = document.querySelector("#full-screen")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}


featuredAnimation()
menuAnimation()
loaderAnimation()