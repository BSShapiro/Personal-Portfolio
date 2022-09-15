const aboutBtnFunc = () => {
  const aboutBtn = document.getElementsByClassName("about-me-btn");

  const projectsBtn = document.getElementsByClassName("projects-btn");

  const projectsDiv = document.getElementsByClassName('main-project-div')

  const aboutDiv = document.getElementsByClassName('main-about-div')

  aboutBtn[0].addEventListener("click", async () => {
    aboutBtn[0].classList.add("nav-btn-selected");
    projectsBtn[0].classList.remove("nav-btn-selected");
    aboutDiv[0].style.opacity = '0'
    aboutDiv[0].style.display = 'flex'
    await setTimeout(() => {
        projectsDiv[0].style.opacity = '0';
    }, 1)
    projectsDiv[0].style.display = 'none';
    await setTimeout (() => {
        aboutDiv[0].style.opacity = "1";
    }, 1);

  });
};

aboutBtnFunc();


const projectsBtnFunc = () => {
  const projectsBtn = document.getElementsByClassName("projects-btn");

  const aboutBtn = document.getElementsByClassName("about-me-btn");

  const projectsDiv = document.getElementsByClassName('main-project-div')

  const aboutDiv = document.getElementsByClassName('main-about-div')

  projectsBtn[0].addEventListener("click", async () => {
    aboutBtn[0].classList.remove('nav-btn-selected');
    projectsBtn[0].classList.add('nav-btn-selected');
    projectsDiv[0].style.opacity = 0;
    projectsDiv[0].style.display = 'flex';
    await setTimeout(() => {
        aboutDiv[0].style.opacity = '0';
    }, 1)
    aboutDiv[0].style.display = 'none';
    await setTimeout (() => {
        projectsDiv[0].style.opacity = "1";
    }, 1);
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
    const slide = document.querySelector(".slide2");
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


const imageCarouselMVPForum = () => {
    const slidesContainer = document.getElementById("slides-container3");
    const slide = document.querySelector(".slide3");
    const prevButton = document.getElementById("slide-arrow-prev3");
    const nextButton = document.getElementById("slide-arrow-next3");
  
    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });
  
    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });
}

imageCarouselMVPForum();