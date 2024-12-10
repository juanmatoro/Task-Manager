# Technical Test - Sisteplant

## Instructions
Create an application that allows users to manage their daily tasks.
The main functionalities are:

- View a list of existing tasks.
- Add new tasks to the list.
- Mark task as completed or not completed.
- Delete tasks from the list.
- Filter tasks to view all tasks, only completed or only not completed tasks.

### Tasks

#### Part 1: Vue

1. **List Component**
    - Create a component named 'TaskList.vue' that displays a list of tasks.
    - Each task should have a name and a status (Completed / Not completed).
    - Allow adding new tasks to the list.
    - Allow marking tasks as completed.
    - Allow deleting tasks from the list.

2. **Filter Component**
    - Create a component named 'TaskFilter.vue' that allows filtering tasks by their status (All / Completed / Not completed).

3. **Integration** 
    - Integrate the 'TaskList.vue' and 'TaskFilter.vue' components into the main 'Home.vue' component.
    - Ensure the filter works correctly with the task list.

4. **Styling**
    - Apply basic styles to make the application visual and usable.
    - Hint: you could use plain css or your preferred tool.

5. **Store tasks**
    - Use MongoDB to store tasks.
    - Setup a MongoDB database locally.
    - Create a collection named 'tasks'.
    - Hint: a container based approach could be useful.

6. **State Management**
    - Use Pinia for state management to handle tasks.

7. **E2E tenting**
    - Write end-to-end tests (e.g using Cypress) to test the functionality of the application.
    - Ensure that tasks can be added, marked as completed, and filtered correctly.

8. **Documentation**
    - Briefly document the code and explain the design and functional decisions you made.

## Submission

- Push your code to a public GitHub repository and share the link.
- Ensure that the repository contains all necessary files and instructions to run the application.

Good luck! We look forward to seeing your solution.