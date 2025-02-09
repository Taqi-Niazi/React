import React, {useState} from 'react';

function ToDoList(){

    const[task, setTask] = useState(["Eat","Sleep","Repeat"]);
    const[newTask, setNewTask] = useState([]);

    function input(event){
        setNewTask(event.target.value)
    };

    function addTasks(index){
        setTask(t=>[...t,newTask])
        setNewTask('')
    };
    function removeTask(index){
        setTask(task.filter((_, i)=> i !== index))
    };
    function moveUp(index){
        
        if(index > 0){
            const updatedList= [...task];
            [updatedList[index], updatedList[index-1]]=[updatedList[index-1], updatedList[index]];
            setTask(updatedList)
        }
        
    };
    function moveDown(index){
        if(index < task.length-1){
            const updatedList1= [...task];
            [updatedList1[index], updatedList1[index+1]]=[updatedList1[index+1], updatedList1[index]];
            setTask(updatedList1)
        }
    };    


    return(
        <div className='todolist'>
            <h1>To Do List</h1>
            <input type="text" value={newTask} className='list-input' onChange={input} placeholder='Input Task'/>
            <button className='list-button' onClick={addTasks}>Add</button>
            <ol className='ordered-list'>
               {task.map ((tas, index) =>
               <li className='inputlist' key={index}>
                 <span >{tas}</span> 
                 <button className='remove-list' onClick={()=>{removeTask(index)}}>Delete</button>
                 <button  className='up-list' onClick={()=>{moveUp(index)}}>Up</button>
                 <button  className='down-list' onClick={()=>{moveDown(index)}}>Down</button>
               </li>)} 
            </ol>
        </div>
    )
}
export default ToDoList;  