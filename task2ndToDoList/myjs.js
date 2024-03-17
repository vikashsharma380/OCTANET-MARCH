let ListContainer=document.getElementById('List-container')


let inputbox=document.getElementById('input-box')


function addTask(){
    if(inputbox.value ===''){
        alert('Add Your Task ')
    }

    else{
        let Task=document.createElement('li');
        Task.textContent=inputbox.value;
        ListContainer.appendChild(Task);


        let span=document.createElement('span');
        span.textContent='\u00d7';
        Task.appendChild(span);
 }

 inputbox.value='';

 saveData();
}



ListContainer.addEventListener('click' ,(el)=>{
         if(el.target.tagName == 'LI'){
            el.target.classList.toggle('checked')

            saveData();
         }

         else if(el.target.tagName=='SPAN'){
            el.target.parentElement.remove();
            saveData();
         }
})


function saveData(){
    localStorage.setItem("tasks",ListContainer.innerHTML)

}


function showData(){
    ListContainer.innerHTML=localStorage.getItem('tasks')
}


showData();
