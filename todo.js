document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("new-task");
    const todoList = document.getElementById("todo-list");
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addtask(input.value)
        input.value = '';
    });
    
     function addtask(tasktext) {
        if(tasktext.trim() === '') return;
    
        const li = document.createElement('li');
         li.textContent = tasktext;
    
         const completeButton = document.createElement('button');
         completeButton.textContent = 'completed';
         completeButton.addEventListener('click',()=>{
            li.classList.add("completed");
         });
         
         const deleteButton = document.createElement('button');
         deleteButton.textContent = 'delete';
         deleteButton.addEventListener('click', () => {
             li.remove();  
             completeButton.remove();
             deleteButton.remove();   
         });
    
         todoList.appendChild(li);
         todoList.appendChild(completeButton);
         todoList.appendChild(deleteButton);
    }
    
    });
        