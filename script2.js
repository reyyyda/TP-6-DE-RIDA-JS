let form = document.getElementById("form");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let taskText = input.value;
    if (taskText === "") return;
    let li = document.createElement("li");
    li.textContent = taskText;
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "done";
    doneBtn.addEventListener("click", function() {
        li.classList.toggle("done");
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "supp";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
});
