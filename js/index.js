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

    let sapn = document.createElement("span");
    sapn.innerHTML = "\u00D7";
    li.appendChild(sapn);
  }
  input.value = "";
}
