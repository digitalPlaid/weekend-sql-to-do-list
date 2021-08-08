# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

# TO DO - by process
[x] Create a task
    [x] client - add form on html page w/ button
    [x] client - wire button on front end - ajax post
    [x] server - wire button on back end - app.post call to DB
    [x] client - get list of tasks
[x] Get list of tasks
    [x] client - ajax get call
    [x] server - request db to send info
    [x] client - display to dom
[x] display to dom
    [x] client - info passed to it is list of tasks to append
    [x] client - it appends the info w/ classes, etc. that we will need
    [x] client - complete button for each
    [x] client - delete button for each
[x] wire up complete button
    [x] client - set up listener that makes ajax call
    [x] server - pings data base to change this, also sets date completed and displays 
    [x] client - upon success change the visual representation (line thru?) add a class
[x] wire up the delete button
    [x] client - delete ajax call
    [x] server - delete db query
    [x] client - get list of tasks(i.e. redisplay)
[x] server - Set up DB
    [x] Set up DB Connection
    [x] Import that into each routes file
    [x] postico - create a DB w/ name `weekend-to-do-app`
        [x] create table with following headings:
            [x] complete
            [x] task
            [x] date_completed
[] client - styling
    [x] change background color
    [x] font family and size
    [] text color and/or background color of tasks to show completed vs not
    [] add bootstrap 
        [x] make creation buttons green
        [x] make deletion buttons red
        [x] make inputs in the bootstrap way
        [] make the page responsive to different layouts - bootstrap docs per the instructions (and make width of task input to be not 100%)
    [] make the table be static in its shape - it shouldn't change every time the task input changes
    [x] make presentation of dates prettier. just give the date w/ slashes or dashes
    [] put title in jumbotron or something
[x] client - confirm delete when deleting
    [x] see bootstrap docs per the instructions
[] ordering task query
    [] option to reverse the order tasks display in
    [] see instructions for detail
[x] record when a task was completed
