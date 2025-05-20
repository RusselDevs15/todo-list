const addBtn = document
  .querySelector("#addBtn")
  .addEventListener("click", () => {
    const input = document.querySelector("#taskInput");
    const textInput = input.value.trim();

    //Condition
    if (textInput !== "") {
      const li = document.createElement("li");
      li.textContent = textInput;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      li.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", () => li.remove());

      const taskList = document.querySelector("#taskList");
      taskList.appendChild(li);

      //clear
      input.value = "";
    } else {
      alert("You need to input task!s");
    }
  });
