const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")

burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active")
})

const links = document.querySelectorAll(".links")

links.forEach(function(link) {
    link.addEventListener("click", function() {
        nav.classList.remove("nav-active")
    })
})

const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

const scrollLink = document.querySelectorAll(".scroll-link")
const navbar = document.getElementById("nav-bar")

scrollLink.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        const navbarHeight = navbar.getBoundingClientRect().height
        const navHeight = nav.getBoundingClientRect().height
        let position = element.offsetTop - navbarHeight
        if(navbarHeight > 50) {
            position = position + navHeight
        }
        window.scrollTo({
            left: 0,
            top: position
        })
    })
})

window.addEventListener("scroll", function() {
   nav.classList.remove("nav-active")
})