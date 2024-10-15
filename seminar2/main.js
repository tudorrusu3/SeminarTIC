import { registerUser } from "./userManagement.js";
console.log('I\'m in');

const tasks = [
    {
        'id': 1,
        'responsible': 'Tudor',
        'description': 'do the dishes',
        'status': 'pending'
    },
    {
        'id': 2,
        'responsible': 'Rares',
        'description': 'do homework',
        'status' : 'done'
    },
    {
        'id': 3,
        'responsible': 'Mihai',
        'description': 'buy cars',
        'status': 'in progress'
    }
]

function printTasks(tasks) {
    tasks.forEach(element => {
        console.log(`Responsible: ${element.responsible}
Description: ${element.description}
----------------`);
    });
}

function displayTasks(tasks) {
    const container = document.getElementById('task-container');
    if(tasks.length === 0) {
        const noTaskWarning = document.createElement('p');
        noTaskWarning.textContent = 'No tasks available';
        container.appendChild(noTaskWarning);
    } else {
        const taskList = document.createElement('ul');
        tasks.forEach(element => {
            const taskItem = document.createElement('li');

            const taskId = document.createElement('div');
            taskId.textContent = element.id;
            taskItem.appendChild(taskId);

            const taskResponsible = document.createElement('div');
            taskResponsible.textContent = element.responsible;
            taskItem.appendChild(taskResponsible);

            const taskDescription = document.createElement('div');
            taskDescription.textContent = element.description;
            taskItem.appendChild(taskDescription);

            const taskStatus = document.createElement('div');
            taskStatus.textContent = element.status;
            taskItem.appendChild(taskStatus);

            taskList.appendChild(taskItem);
        })
        container.appendChild(taskList);
    }
}

displayTasks(tasks);
printTasks(tasks);

const registerForm = document.getElementById('register');
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let user = {}
    user.name = document.getElementById('register-name').value.trim();
    user.email = document.getElementById('register-email').value.trim();
    user.password = document.getElementById('register-password').value.trim();

    registerUser(user);
    
})