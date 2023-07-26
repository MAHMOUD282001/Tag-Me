let menuIcon = document.querySelector(".menu-toggle");

let menu = document.querySelector("#navbar ul");

let navbar = document.querySelector("#navbar");

let header = document.querySelector("header");

let questions = document.querySelectorAll(".question");

let answers = document.querySelectorAll(".answer");

let arrows = document.querySelectorAll(".question span");

let goTopBtn = document.querySelector(".go-top");


window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});




menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("active");

  if (menuIcon.innerHTML === `<i class="fa fa-bars" aria-hidden="true"></i>`) {
    menuIcon.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  } else {
    menuIcon.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("sticky");
    goTopBtn.classList.add("active")
  } else {
    header.classList.remove("sticky");
    goTopBtn.classList.remove("active")
  }
});



questions.forEach((question, index)=>{
  question.addEventListener("click", ()=>{
    
    if(answers[index].classList.contains("active")){
      answers[index].classList.remove("active");
      questions[index].classList.remove("active")
      arrows[index].innerHTML = `<i class="fas fa-chevron-down"></i>`
    }
    
    else{
      removeAllActive(answers)
      removeAllActive(questions)
      answers[index].classList.toggle("active")
      questions[index].classList.toggle("active")
      arrows[index].innerHTML = `<i class="fas fa-chevron-up"></i>`
    }
  })
})

let removeAllActive = (elements)=>{
  elements.forEach((element, index)=>{
    element.classList.remove("active")
  })
}


goTopBtn.addEventListener("click", ()=>{
  scrollTo(0, 0)
})