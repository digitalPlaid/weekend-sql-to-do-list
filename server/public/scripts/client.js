$(document).ready(onReady);


function onReady() {
    // add event listeners
    addListeners();
    // displa initial task list
    getTasks();
}

function addListeners() {
    $('#createTaskBtn').on('click', createTask)
};

function createTask() {
    // collect info
    let task = $('#taskInput').val();
    // empty the input area
    $('#taskInput').val('');
    // send to server
    $.ajax({
        method: 'POST',
        url: '/task',
        data: {task}
    }).then((response) => {
        console.log('Successfully posted new task: ', response);
        getTasks();
    }).catch((error) => {
        console.log('Failed to post new task: ', error);
        alert('Failed to post new task. Check console for error.')
    })

};

function getTasks() {
    // get tasks
    $.ajax({
        method: 'GET',
        url: '/task'
    }).then((response) => {
        console.log(response);
        console.log('successfully GET');
        displayTasks(response);
    }).catch((error) => {
        console.log('Failed to get: ', error);
        alert('Failed to retrieve tasks. See console for error.')
    })
    // displaygit status
    
}

function displayTasks(tasks) {
    console.log('in displayTasks');
    console.log(tasks);
    let outputArea = $('#taskOut');
    outputArea.empty()
    for (element of tasks) {
        outputArea.append(`
        <tr data-id="${element.id}" data-complete="${element.date_completed}">
            <td>${element.task}</td>
            <td><button class=".complete">Complete</button>
            <td>${element.date_completed}</td>
            <td><button class=".delete">Delete</button></td>
        </tr>
        `)
    }
}