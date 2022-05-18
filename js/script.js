
// Top Bar Section 

$(window).ready(function () {

    $(".top-bar .right").animate({

        right: 0,

        opacity: 1

    })

    $(".top-bar .top").animate({

        top: 0,

        opacity: 1

    })

    $(".top-bar .left").animate({

        left: 0,

        opacity: 1

    })

    $(".top-bar .bottom").animate({

        bottom: 0,

        opacity: 1

    })

})

// Header Section 

$(".header .burger-icon").click(function () {

    $(".header .overly").toggleClass("active")

})

$(window).scroll(function() {

    if ($(window).scrollTop() >= 1000 ) {

        $(".top-bar").addClass("active")

        $(".header").addClass("active")

    } else {

        $(".top-bar").removeClass("active")

        $(".header").removeClass("active")

    }

})

$(".header .overly .closebutton").click(function () {

    $(".header .overly").removeClass("active")

})

$(".header ul li a").click(function (e) {

    e.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    $("html , body").animate({

        scrollTop: $("." + $(this).data("scroll")).offset().top - $(".header").innerHeight()

    })

    $(".header .overly").removeClass("active")

})

$(window).ready(function () {

    $(".header .right").animate({

        right: 0,

        opacity: 1

    })

    $(".header .top").animate({

        top: 0,

        opacity: 1

    })

    $(".header .left").animate({

        left: 0,

        opacity: 1

    })

    $(".header .bottom").animate({

        bottom: 0,

        opacity: 1

    })

})

// Landing Section 

setInterval(() => {

    slider.append(slide[0])

}, 5000);

let slider = document.querySelector(".landing .slider")

let slide = slider.getElementsByClassName("slide")

function lanNext() {

    slider.append(slide[0])

}

function lanPrev() {

    slider.prepend(slide[slide.length - 1])

}

$(window).ready(function () {

    $(".landing .right").animate({

        right: 0,

        opacity: 1

    })

    $(".landing .top").animate({

        top: 0,

        opacity: 1

    })

    $(".landing .left").animate({

        left: 0,

        opacity: 1

    })

    $(".landing .bottom").animate({

        bottom: 0,

        opacity: 1

    })

})

$(".landing button").click(function () {

    $("html , body").animate({

        scrollTop: $( "." + $(this).data("lan")).offset().top

    })

})

// Setting Box Section 

$(".setting-box .icon").click(function () {

    $(".setting-box").toggleClass("active")

})

document.body.classList.add(localStorage.getItem("bodycolor"))

let el = document.querySelectorAll(".setting-box .color div")

let ColorArrey = []

for (let i = 0; i < el.length; i++) {

    ColorArrey.push(el[i].getAttribute("data-color"))

    el[i].addEventListener("click" , function () {

        document.body.classList.remove(...ColorArrey)

        document.body.classList.add(el[i].getAttribute("data-color"))

        localStorage.setItem("bodycolor" , this.getAttribute("data-color"))

        console.log(localStorage.getItem("bodycolor"))

    })

}


// Feature Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".feature").offset().top - 400) {

        
    $(".feature .right").animate({

        right: 0,

        opacity: 1

    })

    $(".feature .top").animate({

        top: 0,

        opacity: 1

    })

    $(".feature .left").animate({

        left: 0,

        opacity: 1

    })

    $(".feature .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// About Section 


$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".about").offset().top - 400) {

        
    $(".about .right").animate({

        right: 0,

        opacity: 1

    })

    $(".about .top").animate({

        top: 0,

        opacity: 1

    })

    $(".about .left").animate({

        left: 0,

        opacity: 1

    })

    $(".about .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Skills Section 

let skillSection = document.querySelector(".skills")

let skillOffsetTop = skillSection.offsetTop;


let work = false;

let progSpan = document.querySelectorAll(".skills .prog span")

let skillNum = document.querySelectorAll(".skills .head .num")


function skillsCounter(el) {

    let nums = el.dataset.nums;

    let counte = setInterval(function () {

        el.textContent++;

        if (el.textContent === nums) {

            clearInterval(counte)

        }

    })

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".skills").offset().top - 400) {

        
    $(".skills .right").animate({

        right: 0,

        opacity: 1

    })

    $(".skills .top").animate({

        top: 0,

        opacity: 1

    })

    $(".skills .left").animate({

        left: 0,

        opacity: 1

    })

    $(".skills .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// State Section 

let stateSection = document.querySelector(".state")

let stateOffsetTop = stateSection.offsetTop;

let started = false;

let stateSpan = document.querySelectorAll(".state span")

function stateCounter(e) {

    let Goal = e.dataset.goal;

    let counte = setInterval(function () {

        e.textContent++;

        if (e.textContent === Goal) {

            clearInterval(counte)

        }

    })

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".state").offset().top - 400) {

    $(".state .top").animate({

        top: 0,

        opacity: 1

    })


    $(".state .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Client Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".client").offset().top - 400) {

    $(".client .top").animate({

        top: 0,

        opacity: 1

    })


    $(".client .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Services Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".services").offset().top - 400) {

        
    $(".services .right").animate({

        right: 0,

        opacity: 1

    })

    $(".services .top").animate({

        top: 0,

        opacity: 1

    })

    $(".services .left").animate({

        left: 0,

        opacity: 1

    })

    $(".services .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Testimonlis Section

setInterval(function () {

    testSlider.append(testSlide[0])

} , 5000)

let testSlider = document.querySelector(".testimonlis .slider")

let testSlide = testSlider.getElementsByClassName("slide")

function testNext() {

    testSlider.append(testSlide[0])

}

function testPrev() {

    testSlider.prepend(testSlide[testSlide.length - 1])

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".testimonlis").offset().top - 400) {

        
    $(".testimonlis .right").animate({

        right: 0,

        opacity: 1

    })

    $(".testimonlis .top").animate({

        top: 0,

        opacity: 1

    })

    $(".testimonlis .left").animate({

        left: 0,

        opacity: 1

    })

    $(".testimonlis .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Portfolio Section 

$(".portfolio .portfolio-head ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var portfolioClass = $(this).data("class");

    $(".portfolio .row .all").fadeOut()

    $(".portfolio .row ." + portfolioClass).fadeIn()

})

let portfolioImg = document.querySelectorAll(".portfolio img")

portfolioImg.forEach((img)=> {

    img.addEventListener("click" , function () {

        let overly = document.createElement("div")

        overly.className = "overly-box"

        document.body.appendChild(overly)

        let box = document.createElement("div")

        box.className = "img-box"

        overly.appendChild(box)

        if (img.alt !== "") {

            let head = document.createElement("h3")

            head.className = "box-head"

            let headText = document.createTextNode(img.alt)

            head.appendChild(headText)

            box.appendChild(head)

        }

        let imgBox = document.createElement("img")

        imgBox.src = img.src

        box.appendChild(imgBox)

        let closeButton = document.createElement("span")

        closeButton.className = "close-button"

        let closeButtonText = document.createTextNode("X")

        closeButton.appendChild(closeButtonText)

        box.appendChild(closeButton)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "overly-box") {

                overly.remove()

            }

            if (el.target.className === "close-button") {

                overly.remove()

            }

        })

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".portfolio").offset().top - 400) {

    $(".portfolio .hidden").animate({

        opacity: 1

    })

    $(".portfolio .right").animate({

        right: 0,

        opacity: 1

    })

    $(".portfolio .top").animate({

        top: 0,

        opacity: 1

    })

    $(".portfolio .left").animate({

        left: 0,

        opacity: 1

    })

    $(".portfolio .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Team Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".team").offset().top - 400) {

    $(".team .right").animate({

        right: 0,

        opacity: 1

    })

    $(".team .top").animate({

        top: 0,

        opacity: 1

    })

    $(".team .left").animate({

        left: 0,

        opacity: 1

    })

    $(".team .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Pricing Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".pricing").offset().top - 400) {

    $(".pricing .hidden").animate({

        opacity: 1

    })

    $(".pricing .right").animate({

        right: 0,

        opacity: 1

    })

    $(".pricing .top").animate({

        top: 0,

        opacity: 1

    })

    $(".pricing .left").animate({

        left: 0,

        opacity: 1

    })

    $(".pricing .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Contact Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".contact").offset().top - 400) {


    $(".contact .right").animate({

        right: 0,

        opacity: 1

    })

    $(".contact .top").animate({

        top: 0,

        opacity: 1

    })

    $(".contact .left").animate({

        left: 0,

        opacity: 1

    })

    $(".contact .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Footer Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".footer").offset().top - 400) {


    $(".footer .right").animate({

        right: 0,

        opacity: 1

    })

    $(".footer .top").animate({

        top: 0,

        opacity: 1

    })

    $(".footer .left").animate({

        left: 0,

        opacity: 1

    })

    $(".footer .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    }

})

// Button To Up 

$("span.up").click(function () {

    $("html , body").animate({

        scrollTop: 0

    })

})


$(window).scroll(function () {

    if ($(window).scrollTop() >= 1000) {

        $("span.up").fadeIn()

    } else {

        $("span.up").fadeOut()

    }

})


window.onscroll = function () {

    // Skills Section 

    if (window.scrollY >= skillOffsetTop - 400) {

        progSpan.forEach((span)=> {

            span.style.width = span.dataset.prog

        })

    }

    if (window.scrollY >= skillOffsetTop - 400) {

        if (!work) {

            skillNum.forEach((num)=> {

                skillsCounter(num)

            })

        }

        work = true
    }

    // State Section 

    if (window.scrollY >= stateOffsetTop - 400) {

        if (!started) {

            stateSpan.forEach((nums)=> {

                stateCounter(nums)

            })

        }

        started = true

    }

}