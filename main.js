const aboutBtnFunc = () => {
  const aboutBtn = document.getElementsByClassName("about-me-btn");

  const projectsDiv = document.getElementsByClassName('main-project-div')

  const aboutDiv = document.getElementsByClassName('main-about-div')

  aboutBtn[0].addEventListener("click", () => {
    projectsDiv[0].style.display = "none";
    aboutDiv[0].style.display = "flex";
  });
};

aboutBtnFunc();


const projectsBtnFunc = () => {
  const projectsBtn = document.getElementsByClassName("projects-btn");

  const projectsDiv = document.getElementsByClassName('main-project-div')

  const aboutDiv = document.getElementsByClassName('main-about-div')

  projectsBtn[0].addEventListener("click", () => {
    projectsDiv[0].style.display = "flex";
    aboutDiv[0].style.display = "none";
  });
};

projectsBtnFunc();


const imageCarouselHackingTransition = () => {
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
};

imageCarouselHackingTransition();

const imageCarouselKetchup = () => {
    const slidesContainer = document.getElementById("slides-container1");
    const slide = document.querySelector(".slide1");
    const prevButton = document.getElementById("slide-arrow-prev1");
    const nextButton = document.getElementById("slide-arrow-next1");
  
    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });
  
    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });
  };

imageCarouselKetchup();


const imageCarouselReactToDo = () => {
    const slidesContainer = document.getElementById("slides-container2");
    const slide = document.querySelector(".slide1");
    const prevButton = document.getElementById("slide-arrow-prev2");
    const nextButton = document.getElementById("slide-arrow-next2");
  
    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });
  
    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });
};

imageCarouselReactToDo();