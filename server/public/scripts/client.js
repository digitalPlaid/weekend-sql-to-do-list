$(document).ready(onReady);


function onReady() {
    // add event listeners
    addListeners();
    // displa initial task list
    getTasks();
}

function addListeners() {
    $('#createTaskBtn').on('click', createTask);
    $('#taskOut').on('click', '.complete', completeTask);
};

function completeTask() {
    // grab id from button
    let id = $(this).closest('tr').data('id');
    // send ajax w/ the id on the url
    $.ajax({
        method: 'PUT',
        url: `/task/${id}`,
    }).then(response => {
        console.log('Successfully updated data.');
        // apply css change of style
        getTasks(); // redisplay so that the new date shows up.
    }).catch(error => {
        console.log('Failed to put data: ', error);
        alert('Failed to put. See console for details.')
    })
        // if successful
        // apply css class to change style
        // add completion date ( do on client or server side? )

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
        console.log('successfully GET');
        displayTasks(response);
    }).catch((error) => {
        console.log('Failed to get: ', error);
        alert('Failed to retrieve tasks. See console for error.')
    })
}

function displayTasks(tasks) {
    console.log('in displayTasks');
    console.log(tasks);
    let outputArea = $('#taskOut');
    outputArea.empty()
    for (element of tasks) {
        let completeBtn = element.complete ? '' : `<button class="complete">Complete</button>`;
        outputArea.append(`
        <tr data-id="${element.id}" data-complete="${element.date_completed}">
            <td>${element.task}</td>
            <td>${completeBtn}</td>
            <td>${element.date_completed}</td>
            <td><button class="delete">Delete</button></td>
        </tr>
        `)
    }
}