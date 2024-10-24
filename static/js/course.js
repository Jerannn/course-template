// import { displayIntro } from "./model/intro.js";
// import { lessonsObj } from "./model/lessons.js";

// const holderContainer = document.getElementById("holder-container");
// let currentLesson = 0;

// const init = () => {
//   displayIntro();
//   startCourse();
// };
// init();

// function startCourse() {
//   const startCourseBtn = document.querySelector(".start-btn");
//   startCourseBtn.addEventListener("click", () => {
//     displayLesson(lessonsObj[currentLesson]);
//     console.log("click");
//   });
// }

// function displayLesson(lesson) {
//   const lessonTemplate = `
//     <div class="lesson-section" id="lesson-wrapper">
//       <div class="lesson-content">
//         <header class="lesson-header">
//           <h1 class="lesson-title">${lesson.title}</h1>
//           <p class="lesson-progress">LESSON ${currentLesson + 1} of ${
//     lessonsObj.length
//   }</p>
//         </header>

//         <div class="lesson-body">
//           <!-- lesson content here -->
//           ${lesson.body}
//         </div>

//         <div class="lesson-buttons">
//           <button class="btn btn-square" id="btn-prev">Prev</button>
//           <button class="btn btn-square" id="btn-next">Next</button>
//         </div>
//       </div>
//     </div>
//   `;

//   holderContainer.innerHTML = lessonTemplate;
//   controlPages();
// }

// function controlPages() {
//   const btnPrev = document.getElementById("btn-prev");
//   const btnNext = document.getElementById("btn-next");

//   btnPrev.addEventListener("click", () => {
//     if (currentLesson === 0) {
//       displayIntro();
//       startCourse();
//       return;
//     }
//     currentLesson--;
//     displayLesson(lessonsObj[currentLesson]);
//   });

//   btnNext.addEventListener("click", () => {
//     if (currentLesson >= lessonsObj.length - 1) return;
//     currentLesson++;
//     displayLesson(lessonsObj[currentLesson]);
//   });
// }

const card = document.querySelector(".card");

let cardStartX;
let cardStartY;
let initialX, initialY;
let cardLocation = {};

let isDragging = false;
let isDraggingDown = false;

const onMouseExit = () => {
  if (isDragging) {
    isDragging = false;
    card.classList.add("shake");

    setTimeout(() => {
      card.style.top = `0`;
      card.style.left = `calc(50% - 100px)`;
      card.classList.remove("shake");
    }, 1000);
  }

  // Re-enable text selection after dragging
  document.body.style.userSelect = "auto";
  card.style.cursor = "grab";
};

const onMouseDown = (e) => {
  isDragging = true;

  initialX = card.offsetLeft;
  initialY = card.offsetTop;

  cardStartX = e.clientX;
  cardStartY = e.clientY;

  document.body.style.userSelect = "none";
  card.style.cursor = "grabbing";
};

const onDragging = (e) => {
  if (!isDragging) return;
  cardLocation = {
    x: initialX + (e.clientX - cardStartX),
    y: initialY + (e.clientY - cardStartY),
  };

  card.style.left = `${cardLocation.x}px`;
  card.style.top = `${cardLocation.y}px`;

  isDraggingDown = cardLocation.y > 0;
};

card.addEventListener("mousedown", onMouseDown);
card.addEventListener("mousemove", onDragging);
card.addEventListener("mouseup", onMouseExit);
document.addEventListener("mouseleave", onMouseExit);
