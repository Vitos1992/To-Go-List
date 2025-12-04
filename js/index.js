const input = document.querySelector(".input");
const inpBtn = document.querySelector(".inp_btn");
const inToDo = document.querySelector(".ul_to_do");

inpBtn.addEventListener("click", function () {
  addTask();
});

function addTask() {
  if (input.value === "") {
    alert("Потрібно ввести завдання!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    inToDo.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; //символ "×"
    li.appendChild(span);
  }
  input.value = "";
  sameDate();
}

inToDo.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("selected");
    sameDate();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    sameDate();
  }
});

function sameDate() {
  localStorage.setItem("date", inToDo.innerHTML);
}

function showDate() {
  inToDo.innerHTML = localStorage.getItem("date");
}

showDate();
