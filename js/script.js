
// Setting-Box Section 

let settingBox = document.querySelector(".setting-box")
let settingIcon = document.querySelector(".setting-box .icon")

settingIcon.addEventListener("click", function () {
    settingBox.classList.toggle("active")
    this.classList.toggle("active")
})

let colorEl = document.querySelectorAll(".setting-box .color li")

let mainColor = localStorage.getItem("color-option")

if (mainColor !== null) {
    colorEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.color === mainColor) {
            el.classList.add("active")
        }
        document.documentElement.style.setProperty("--main-Color", mainColor)
    })
}

colorEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        colorEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        document.documentElement.style.setProperty("--main-Color", e.target.dataset.color)
        document.documentElement.style.setProperty("transition", "all 0.4s linear")
        localStorage.setItem("color-option", e.target.dataset.color)
    })
})

let themeEl = document.querySelectorAll(".setting-box .theme li")

let mainTheme = localStorage.getItem("theme-option")

if (mainTheme !== null) {
    themeEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.theme === mainTheme) {
            el.classList.add("active")
            document.body.style.backgroundColor = mainTheme
        }
    })
}

themeEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        themeEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        document.body.style.backgroundColor = e.target.dataset.theme;
        localStorage.setItem("theme-option", e.target.dataset.theme)
    })
})

let sliderOption;
let sliderInterval;

function makSlider() {
    if (sliderOption === true) {
        sliderInterval = setInterval(() => {
            slider.prepend(slide[slide.length - 1])
        }, 1000)
    }
}

makSlider()

let randomEl = document.querySelectorAll(".setting-box .random li")

let mainRandom = localStorage.getItem("slider-option")

if (mainRandom !== null) {
    randomEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.random === mainRandom) {
            el.classList.add("active")
            if (mainRandom === "true") {
                sliderOption = true
                makSlider()
            } else {
                sliderOption = false
            }
        }
    })
}

randomEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        randomEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        if (e.target.dataset.random === "true") {
            sliderOption = true;
            makSlider()
            localStorage.setItem("slider-option", true)
        } else {
            sliderOption = false;
            clearInterval(sliderInterval)
            localStorage.setItem("slider-option", false)
        }
    })
})

let bullet = document.querySelector(".bullet")
let bulletEl = document.querySelectorAll(".setting-box .bullets li")

let mainBullets = localStorage.getItem("bullets-option")

if (mainBullets !== null) {
    bulletEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.bullets === mainBullets) {
            el.classList.add("active")
            if (mainBullets === "true") {
                bullet.style.display = "none"
            } else {
                bullet.style.display = "block"
            }
        }
    })
}

bulletEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        bulletEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        if (e.target.dataset.bullets === "true") {
            bullet.style.display = "none"
            localStorage.setItem("bullets-option", true)
        } else {
            bullet.style.display = "block"
            localStorage.setItem("bullets-option", false)
        }
    })
})

let settingReset = document.querySelector(".setting-box .reset button")

settingReset.addEventListener("click", function () {
    localStorage.removeItem("color-option")
    localStorage.removeItem("theme-option")
    localStorage.removeItem("slider-option")
    localStorage.removeItem("bullets-option")
    window.location.reload()
})

// Header Section 

let topBar = document.querySelector(".top-bar")
let header = document.querySelector(".header")
let headerIcon = document.querySelector(".header .burger-icon")
let headerLinks = document.querySelector(".header ul")

headerIcon.addEventListener("click", function () {
    let headerOverly = document.createElement("div")
    headerOverly.className = "header-overly"
    document.body.appendChild(headerOverly)
    headerOverly.appendChild(headerLinks)
    let closeButton = document.createElement("span")
    closeButton.className = "close-button"
    let buttonText = document.createTextNode("X")
    closeButton.appendChild(buttonText)
    headerOverly.appendChild(closeButton)
    document.addEventListener("click", function (el) {
        if (el.target.className === "close-button" || el.target.className === "header-overly") {
            headerOverly.remove()
        }
    })
    document.querySelectorAll(".header-overly a").forEach((e) => {
        e.addEventListener("click", function () {
            headerOverly.remove()
        })
    })
})

$(".header ul a").click(function (e) {
    e.preventDefault
    $("html, body").animate({
        scrollTop: $("." + $(this).data("scroll")).offset().top
    })
})

let slider = document.querySelector(".landing .slider")
let slide = slider.getElementsByClassName("slide")

function lanPrev() {
    slider.prepend(slide[slide.length - 1])
}

function lanNext() {
    slider.append(slide[0])
}

// Skills Section 

let skillSection = document.querySelector(".skills")
let skillsSpan = document.querySelectorAll(".skills .prog span")
let skillsOffsetTop = skillSection.offsetTop;
let skillNum = document.querySelectorAll(".skills .num")
let skillStarted = false;

function SkillsCounter (el) {
    let goal = el.dataset.nums
    let counte = setInterval(() => {
        el.textContent++
        if (el.textContent === goal) {
            clearInterval(counte)
        }
    })
}

// State Section 

let state = document.querySelector(".state")
let stateOffsetTop = state.offsetTop;
let stateNum = document.querySelectorAll(".state .num")
let stateStart = false;

function StateCounter (el) {
    let goal = el.dataset.goal;
    let counte = setInterval(() => {
        el.textContent++
        if (el.textContent === goal) {
            clearInterval(counte)
        }
    })
}

// Testimonlis Section 

let testSlider = document.querySelector(".testimonlis .slider")
let testSlide = testSlider.getElementsByClassName("slide")

function testPrev() {
    testSlider.prepend(testSlide[testSlide.length - 1])
}

function testNext() {
    testSlider.append(testSlide[0])
}

// Portfolio Section 

let portfolioHead = document.querySelectorAll(".portfolio .portfolio-head li")
let portfolioBoxs = document.querySelectorAll(".portfolio .row > div")


portfolioHead.forEach((li) => {
    li.addEventListener("click", function () {
        portfolioHead.forEach((li) => {
            li.classList.remove("active")
            this.classList.add("active")
        })
        portfolioBoxs.forEach((box) => {
            box.style.display = "none"
        })
        document.querySelectorAll(li.dataset.class).forEach((el) => {
            el.style.display = "block"
        })
    })
})

let portfolioImg = document.querySelectorAll(".portfolio img")

portfolioImg.forEach((img) => {
    img.addEventListener("click", function () {
        let overly = document.createElement("div")
        overly.className = "overly-box"
        document.body.appendChild(overly)
        let slider = document.createElement("div")
        slider.className = "slider"
        overly.appendChild(slider)
        let boxImg = document.createElement("div")
        boxImg.className = "box-img"
        slider.appendChild(boxImg)
        let imgBox = document.createElement("img")
        imgBox.src = img.src
        boxImg.appendChild(imgBox)
        let closeButton = document.createElement("span")
        closeButton.className = "close-button"
        let closeButtonText = document.createTextNode("X")
        closeButton.appendChild(closeButtonText)
        overly.appendChild(closeButton)
        document.addEventListener("click", function (el) {
            if (el.target.className === "close-button" || el.target.className === "overly-box") {
                overly.remove()
            }
        })
    })
})

// Bullet Section  

$(".bullet span").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    $("html, body").animate({
        scrollTop: $("." + $(this).data("bullet")).offset().top 
    })
})

// Button To Top 

let buttonToTop = document.querySelector("span.up")

buttonToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

window.onscroll = function () {
    // Header Section 
    if (window.scrollY >= 800) {
        topBar.classList.add("active")
        header.classList.add("active")
    } else {
        topBar.classList.remove("active")
        header.classList.remove("active")
    }
    // Skills Section 
    if (window.scrollY >= skillsOffsetTop - 600) {
        skillsSpan.forEach((span) => {
            span.style.width = span.dataset.prog
        })
        if (!skillStarted) {
            skillNum.forEach((num) => {
                SkillsCounter(num)
            })
        }
        skillStarted = true
    }
    // State Section 
    if (window.scrollY >= stateOffsetTop - 400) {
        if (!stateStart) {
            stateNum.forEach((span) => {
                StateCounter(span)
            })
        }
        stateStart = true
    }
    // Bullet Section 
    window.scrollY >= 800 ? bullet.classList.add("active"):bullet.classList.remove("active")
    // Button To Top 
    window.scrollY >= 800 ? buttonToTop.classList.add("active"):buttonToTop.classList.remove("active")
}