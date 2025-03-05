let tasks = [];

function addTask() {
    let inputTask = document.getElementById("name").value.trim();
    let inputPriority = Number(document.getElementById("priority").value);

    if (!inputTask || isNaN(inputPriority) || inputPriority < 1 || inputPriority > 10) {
        alert("Please enter a valid task and priority (1-10).");
        return;
    }

    // Prevent duplicate tasks
    if (tasks.some(task => task.task.toLowerCase() === inputTask.toLowerCase())) {
        alert("This task already exists!");
        return;
    }

    // Add task and sort by priority
    tasks.push({ task: inputTask, priority: inputPriority });
    tasks.sort((a, b) => a.priority - b.priority);

    displayTasks();

    // Clear input fields
    document.getElementById("name").value = '';
    document.getElementById("priority").value = '';
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let taskElement = document.createElement("div");
        taskElement.classList.add("task-item");

        // Apply color coding based on priority
        if (task.priority <= 3) {
            taskElement.classList.add("high-priority"); // High priority
        } else if (task.priority <= 6) {
            taskElement.classList.add("medium-priority"); // Medium priority
        } else {
            taskElement.classList.add("low-priority"); // Low priority
        }

        taskElement.innerHTML = `
            <span><strong>Priority:</strong> ${task.priority} | <strong>Task:</strong> ${task.task}</span>
            <button onclick="removeTask(${index})">Delete</button>
        `;

        taskList.appendChild(taskElement);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
