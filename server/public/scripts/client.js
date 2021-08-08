$(document).ready(onReady);

let id = 0;
function onReady() {
    // add event listeners
    addListeners();
    // display initial task list
    getTasks();
}

function addListeners() {
    $('#createTaskBtn').on('click', createTask);
    $('#taskOut').on('click', '.complete', completeTask);
    $('#taskOut').on('click', '.collectID', collectID);
    $(document).on('click','.delete', deleteTask);
};

function collectID() {
    id = $(this).closest('tr').data('id')
}

function deleteTask() {
    // attach it to the modal, rather than the delete button (so that delete just launches the modal which contains the real delete button)
    console.log('in delete task');
    $.ajax({
        method: 'DELETE',
        url: `/task/${id}`
    }).then((response) => {
        getTasks();
    }).catch((error) => {
        console.log('Delete request failed.', error);
        alert('Delete request failed. See console for details.');
    })

}

function completeTask() {
    let row = $(this).closest('tr');
    // grab id from button
    let id = row.data('id');
    console.log('id we are trying to put: ', id);
    // send ajax w/ the id on the url
    $.ajax({
        method: 'PUT',
        url: `/task/${id}`,
    }).then(response => {
        console.log('Successfully updated data.');
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
};

function displayTasks(tasks) {
    console.log('in displayTasks');
    console.log(tasks);
    let outputArea = $('#taskOut');
    outputArea.empty()
    for (element of tasks) {
        // decide what we'll inject into the html
        let completeBtn = element.complete ? '' : `<button class="complete btn btn-success">Complete</button>`;
        let background = element.complete ? 'pink' : '';
        let date = element.date_completed === null ? '' : element.date_completed.split('T')[0];
        console.log(typeof date);
        // append the appropriate info
        outputArea.append(`
        <tr class="${background}" data-id="${element.id}" data-complete="${element.date_completed}">
            <td>${completeBtn}</td>
            <td class="strike-able">${element.task}</td>
            <td >${date}</td>
            <td><button class="collectID btn btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button></td>
        </tr>
        `)
    }
}