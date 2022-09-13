const aboutBtnFunc = () => {
  const aboutBtn = document.getElementsByClassName("about-me-btn");

  aboutBtn[0].addEventListener("click", () => {});
};

aboutBtnFunc();


const projectsBtnFunc = () => {
  const projectsBtn = document.getElementsByClassName("projects-btn");

  projectsBtn[0].addEventListener("click", () => {});
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