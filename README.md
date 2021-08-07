# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

# TO DO - by process
[] Create a task
    [x] client - add form on html page w/ button
    [x] client - wire button on front end - ajax post
    [x] server - wire button on back end - app.post call to DB
    [] client - get list of tasks
[] Get list of tasks
    [] client - ajax get call
    [] server - request db to send info
    [] client - display to dom
[] display to dom
    [] client - info passed to it is list of tasks to append
    [] client - it appends the info w/ classes, etc. that we will need
    [] client - complete button for each
    [] client - delete button for each
[] wire up complete button
    [] client - set up listener that makes ajax call
    [] server - pings data base to change this, also sets date completed and displays 
    [] client - upon success change the visual representation (line thru?) add a class
[] wire up the delete button
    [] client - delete ajax call
    [] server - delete db query
    [] client - get list of tasks(i.e. redisplay)
[x] server - Set up DB
    [x] Set up DB Connection
    [x] Import that into each routes file
    [x] postico - create a DB w/ name `weekend-to-do-app`
        [x] create table with following headings:
            [x] complete
            [x] task
            [x] date_completed
[] client - styling
    [] change background color
    [] font family and size
    [] text color and/or background color of tasks to show completed vs not
    [] add bootstrap 
        [] make creation buttons green
        [] make deletion buttons red
        [] make inputs in the bootstrap way
        [] make the page responsive to different layouts - bootstrap docs per the instructions
[] client - confirm delete when deleting
    [] see bootstrap docs per the instructions
[] ordering task query
    [] option to reverse the order tasks display in
    [] see instructions for detail
[] record when a task was completed
    [] add feature to frontend in nice format
