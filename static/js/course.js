import { displayIntro } from "./model/intro.js";
import { lessonsObj } from "./model/lessons.js";

const holderContainer = document.getElementById("holder-container");
let currentLesson = 0;

const init = () => {
  displayIntro();
  startCourse();
};
init();

function startCourse() {
  const startCourseBtn = document.querySelector(".start-btn");
  startCourseBtn.addEventListener("click", () => {
    displayLesson(lessonsObj[currentLesson]);
    console.log("click");
  });
}

function displayLesson(lesson) {
  const lessonTemplate = `
      <div class="lesson-content">
        <header class="lesson-header">
          <h1 class="lesson-title">${lesson.title}</h1>
          <p class="lesson-progress">LESSON ${currentLesson + 1} of ${
    lessonsObj.length
  }</p>
        </header>

        <div class="lesson-body">
          <!-- lesson content here -->
          ${lesson.body}
        </div>

        <div class="lesson-buttons">
          <button class="btn btn-square" id="btn-prev">Prev</button>
          <button class="btn btn-square" id="btn-next">Next</button>
        </div>
      </div>
  `;

  holderContainer.innerHTML = lessonTemplate;
  controlPages();
}

function controlPages() {
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  btnPrev.addEventListener("click", () => {
    if (currentLesson === 0) {
      displayIntro();
      startCourse();
      return;
    }
    currentLesson--;
    displayLesson(lessonsObj[currentLesson]);
  });

  btnNext.addEventListener("click", () => {
    if (currentLesson >= lessonsObj.length - 1) return;
    currentLesson++;
    displayLesson(lessonsObj[currentLesson]);
  });
}

// create a lesson tempalete where header and button below is dynamically changed.

// how to do that?

// create a function for lesson

// create a function for button
