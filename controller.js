function enableEditRow(index) {
    const task = tasks[index];
    task.isEditMode = true;
    taskTextInput = task.text;
    updateView();
}

function saveTaskChanges(index) {
    const task = tasks[index];
    task.text = taskTextInput;
    task.isEditMode = false;
    updateView();
}

function cancelTaskChanges(index) {
    const task = tasks[index];
    task.isEditMode = false;
    updateView();
}
