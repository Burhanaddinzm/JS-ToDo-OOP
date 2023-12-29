"use strict";

const inputEl = document.querySelector("input");
const btnAdd = document.getElementById("add");
const ulEl = document.querySelector("ul");

class ToDoList {
  constructor() {

    this.tasks = [];

    btnAdd.addEventListener("click", (event) => {
      event.preventDefault();

      const inputValue = inputEl.value.trim();

      if (!inputValue) {
        return;
      }

      this.tasks.push(inputValue);;
      this.displayTasks();
      inputEl.value = "";
    });
  }

  displayTasks() {
    ulEl.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const liEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const btnRemove = document.createElement("button");

      spanEl.textContent = task;
      btnRemove.textContent = "Remove";
      btnRemove.addEventListener("click", () => {
        this.removeTask(index);
      });

      liEl.insertAdjacentElement("afterbegin", spanEl);
      liEl.insertAdjacentElement("beforeend", btnRemove);
      ulEl.insertAdjacentElement("beforeend", liEl);
    });
  }

  removeTask(i) {
    this.tasks.splice(i, 1);
    this.displayTasks();
  }
}

const toDoList = new ToDoList();