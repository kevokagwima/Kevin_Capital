const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")
const questions = document.querySelectorAll(".question")

burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active")
})

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })
})