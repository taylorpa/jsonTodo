const todoList = document.getElementById('todo-list')
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((todos) => {
            console.log(todos);
            const todoDiv = document.createElement('div');
            const spanText = document.createElement('span');
            const actions = createActions();
            console.log(actions)
            spanText.innerHTML = `${todos.title}`;

            todoDiv.classList.add('todo');

            todoDiv.appendChild(spanText)
            todoDiv.appendChild(actions)

            todoList.appendChild(todoDiv)

        })
    })
}

function createActions() {
    const createDiv = document.createElement('div');
    const editIcon = createEditIcon();
    const deleteIcon = createDeleteIcon();

    createDiv.classList.add('actions')

    createDiv.appendChild(editIcon)
    createDiv.appendChild(deleteIcon)

    return createDiv;
}

function createEditIcon() {
    const editIcon = document.createElement('i');
    
    editIcon.setAttribute("class","edit fa-regular fa-pen-to-square");
    return editIcon
}

function createDeleteIcon() {
    const deleteIcon = document.createElement('i');
 
    deleteIcon.setAttribute("class","trash fa-solid fa-trash")
    return deleteIcon
}
window.addEventListener("load", getTodos)