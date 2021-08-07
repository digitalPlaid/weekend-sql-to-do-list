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

}