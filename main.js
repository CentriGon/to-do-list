let x = 1;
projectsArray = [];
const addProjectFactory = (nameProject, priority) => {

        projectName = "projectNum" + x,
        priority,
        nameProject;

    let returnValue = {

        isShown: false,

        makeDOM() {
            addProjectDOM(projectName, nameProject);
        },

        addTask(taskName, taskDate, taskDescription) {
            addTaskDOM(projectName, taskName, taskDate, taskDescription);
        },
        showList() {
            showList();
        }
        
    }

    x++;
    return returnValue;

}

function addProjectDOM(projectName, nameProject) {
    const list = document.querySelector('.list');
    const sidebar = document.querySelector('.projects');
    const div = document.createElement('div');
    const sideDiv = document.createElement('div');
    
    sideDiv.setAttribute('class', projectName);
    sideDiv.setAttribute('id', 'project');
    sideDiv.textContent = nameProject;
    sidebar.appendChild(sideDiv);
    div.style.cssText = "content-visibility: hidden;"

    div.setAttribute('class', projectName);
    div.setAttribute('id', "tasksDisplay");
    list.appendChild(div);
}

function addTaskDOM(projectName, taskName, taskDate, taskDescription) {
    console.log(taskDescription);
    const addTo = document.querySelector(".list ." + projectName);
    const task = document.createElement('div'); task.setAttribute('class', 'task');
    const task1 = document.createElement('div'); task1.setAttribute('class', 'task1');
    const others = document.createElement('div'); others.setAttribute('class', 'others');
    const p = document.createElement('p'); p.textContent = taskName;
    const h4 = document.createElement('h4'); h4.textContent = taskDate;
    const button = document.createElement('button'); button.setAttribute('id', 'options'); button.textContent='...'
    
    const checkBox = document.createElement('input'); checkBox.setAttribute('type', 'checkbox'); checkBox.setAttribute('class', 'isDone');

    button.addEventListener('click', () => {
        const grayOut = document.querySelector('.grayOut');
        grayOut.setAttribute('id', 'darkScreen');
        grayOut.style.cssText = "content-visibility: visible";
        const exitButton = document.querySelector('.infoBox button'); 

        exitButton.addEventListener('click', () => {
            grayOut.removeAttribute('id');
            grayOut.style.cssText = "content-visibility: hidden";
        })



        const infoBox = document.querySelector('.infoBox');
        const header = document.querySelector('.infoBox h1'); header.textContent = 'Task Description';
        const descP = document.querySelector('.infoBox p'); descP.textContent = taskDescription;

    })
    
    
    task1.appendChild(checkBox);
    task1.appendChild(p);
    others.appendChild(h4);
    others.appendChild(button);
    task.appendChild(task1);
    task.appendChild(others);
    addTo.appendChild(task);

}

function showList() {
    const sideDiv = document.querySelector('.projects .' + projectName);
    const div = document.querySelector('.list .' + projectName);

    sideDiv.addEventListener('click', () => {
        div.style.cssText = 'content-visibility: visibile;'
    })
}

const addTaskButton = document.querySelector('.list .addTask');

    addTaskButton.addEventListener('click', () => {
        const grayOut = document.querySelector('.grayOut');
        grayOut.setAttribute('id', 'darkScreen');
        grayOut.style.cssText = "content-visibility: visible";
        const exitButton = document.querySelector('.infoBox button'); 
        const infoBox = document.querySelector('.infoBox form');

        exitButton.addEventListener('click', () => {
            grayOut.removeAttribute('id');
            grayOut.style.cssText = "content-visibility: hidden";
        })

        const labelTaskName = document.createElement('labe'); labelTaskName.setAttribute('for', 'taskName'); labelTaskName.textContent="Enter"

        
})


