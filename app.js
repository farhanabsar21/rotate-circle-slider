const circularPath = document.querySelector(".circular-path")
const btnOne = document.querySelector("#btn-1")
const btnTwo = document.querySelector("#btn-2")
const btnThree = document.querySelector("#btn-3")
const btnFour = document.querySelector("#btn-4")

const imgOne = document.querySelector("#img-1")
const imgTwo = document.querySelector("#img-2")
const imgThree = document.querySelector("#img-3")
const imgFour = document.querySelector("#img-4")

const headingOne = document.querySelector("#heading-1")
const headingTwo = document.querySelector("#heading-2")
const headingThree = document.querySelector("#heading-3")
const headingFour = document.querySelector("#heading-4")

btnOne.addEventListener("click", e => {
    e.preventDefault()
    circularPath.style.transform = "rotate(90deg)"
    imgOne.classList.add("active")
    imgTwo.classList.remove("active")
    imgThree.classList.remove("active")
    imgFour.classList.remove("active")
    headingOne.classList.add("header-active")
    headingTwo.classList.remove("header-active")
    headingThree.classList.remove("header-active")
    headingFour.classList.remove("header-active")    
})

btnTwo.addEventListener("click", e => {
    e.preventDefault()
    circularPath.style.transform = "rotate(180deg)"
    imgOne.classList.remove("active")
    imgTwo.classList.add("active")
    imgThree.classList.remove("active")
    imgFour.classList.remove("active")
    headingOne.classList.remove("header-active")
    headingTwo.classList.add("header-active")
    headingThree.classList.remove("header-active")
    headingFour.classList.remove("header-active")
})

btnThree.addEventListener("click", e => {
    e.preventDefault()
    circularPath.style.transform = "rotate(270deg)"
    imgOne.classList.remove("active")
    imgTwo.classList.remove("active")
    imgThree.classList.add("active")
    imgFour.classList.remove("active")
    headingOne.classList.remove("header-active")
    headingTwo.classList.remove("header-active")
    headingThree.classList.add("header-active")
    headingFour.classList.remove("header-active")
})

btnFour.addEventListener("click", e => {
    e.preventDefault()
    circularPath.style.transform = "rotate(360deg)"
    imgOne.classList.remove("active")
    imgTwo.classList.remove("active")
    imgThree.classList.remove("active")
    imgFour.classList.add("active")
    headingOne.classList.remove("header-active")
    headingTwo.classList.remove("header-active")
    headingThree.classList.remove("header-active")
    headingFour.classList.add("header-active")
})