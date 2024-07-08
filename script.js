
function loadTasks() {
    // this fn will load the task from the browser.

    const task= JSON.parse(localStorage.getItem("tasks")) || {"tasklist": []};

    console.log(task);
    return task;
}

function addtodoToLocalstorage(taskText){
    const tasks= loadTasks();
    tasks.tasklist.push(taskText);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded",()=>{
   
    const taskInput= document.getElementById("taskInput");

    const submitButton= document.getElementById("addTask")

    submitButton.addEventListener('click',(event)=>{
        const taskText= taskInput.value;

        if(taskText== ''){
            alert("Please enter something for the task.");
        }else{
            addtodoToLocalstorage(taskText);
        }
    })

    taskInput.addEventListener('change',(event)=>{

        //this call back method id fired everytime there is a change in the input tag.

        const TaskText= event.target.value;

        event.target.value= event.target.value.trim();

        console.log(event.target.value)
        
    })

    loadTasks()
})