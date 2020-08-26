const burger = document.querySelector(".burger")
const navLinks = document.querySelector(".nav-links")
const nav = document.getElementById("nav")

burger.addEventListener("click", function() {
    navLinks.classList.toggle("nav-active")
})

const links = document.querySelectorAll(".links")

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("nav-active")
    })
})

const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

window.addEventListener("scroll", function() {
    const scrollheight = window.pageYOffset
    const navheight = nav.getBoundingClientRect().height
    if(scrollheight > navheight) {
        nav.classList.add("fixed-nav")
    } else {
        nav.classList.remove("fixed-nav")
    }
    navLinks.classList.remove("nav-active")
})

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader")
})

const modalBtn = document.querySelectorAll(".modal")
const closeBtn = document.querySelector(".close-btn")
const modalOverlay = document.querySelector(".modal-overlay")

modalBtn.forEach(function(modal) {
    modal.addEventListener("click", function() {
        modalOverlay.classList.add("open-modal")
    })
})

closeBtn.addEventListener("click", function() {
    modalOverlay.classList.remove("open-modal")
})