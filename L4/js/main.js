const tasks = [
  { id: 1, task: "abc" },
  { id: 2, task: "xyz" },
  { id: 3, task: "mno" },
  { id: 4, task: "pqr" },
  { id: 5, task: "lhk" },
];

function addTask() {
  // lay du lieu tu input field
  const task_name = document.querySelector("#task_input");
  // kiem tra ngoai le
  if (!task_name.value.trim()) {
    alert("Please add content!");
    return;
  }
  // tao id moi
  const id = tasks.length;
  // tao object task
  const objectTask = { id: id, task: task_name.value };
  // add vao danh sach
  tasks.push(objectTask);
  // cap nhat giao dien
  showTaskList();
}

function editTask(id) {}

function deleteTask(id) {
  // get index of object in list
  const ind = -1;
  tasks.map(element, (index) => {
    if (element.id == id) {
      ind = index;
      return;
    }
  });
  if (ind != -1) {
    // delete trong danh sach
    tasks.splice(ind, 1);
    // show lai list moi
  } else {
    alert("Phan tu khong ton tai");
  }
}

function showTaskList() {
  // get task list in html
  const taskList = document.getElementById("task_list");
  //   xoa het du lieu cu
  taskList.innerHTML = "";

  //   for loop to add task
  tasks.forEach((element) => {
    const taskItem = document.createElement("li");
    taskItem.id = element.id;
    taskItem.innerHTML = `
    ${element.task}
    <button class="edit_btn">Edit</button>
    <button class="del_btn">Delete</button>
  `;
    // Append the task item to the task_list
    taskList.appendChild(taskItem);
  });
}

// show task list when first load web
showTaskList();

// add event cho button add
document.getElementById("add_btn").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
