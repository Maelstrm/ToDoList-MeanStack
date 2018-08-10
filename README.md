# ToDoList-MeanStack
A ToDo list using Mongo, Express, Angular, and Node.
---

##Basic Objectives
[ ] Using AngularJS, create a front end experience that allows a user to create a task.
[ ] When the task is created, it should be stored inside of a database (MongoDB)
[ ] Whenever a task is created the front end should refresh to show all tasks that need to be completed.
[ ] Each task should have an option to 'Complete' or 'Delete'.
[ ] When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete. ng-class will come in handy!)
[ ] Whether or not a task is complete should also be stored in the database.
[ ] Deleting a task should remove it both from the Front End as well as the Database.
[X] Include a README.md with your project (template).

##Styling Objectives
[ ] Background color for page
[ ] Adjust font family & size
[ ] text color and/or background color of tasks to show whether or not they have been completed

##Stretch Goals
[ ] Implement Bootstrap to take the visuals of the page up a notch.
[ ] In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interpret this however you would like.
[ ] Move the inputs into a form and use ng-submit so that the user can hit enter to add a new task.
[ ] Add front-end validation to the 'make-a-task' form.
[ ] Add a category field for the task. Allow users to filter by task category.
[ ] Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
