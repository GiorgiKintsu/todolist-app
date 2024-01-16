import { useState } from 'react';
import TaskInput from './components/Taskinput';
import TaskItem from './components/Taskitem';
import Stats from './components/stats';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList, newTask])
  };

  function deletTask(deletTaskName){
    setToDoList(toDoList.filter((task) => task.taskName !== deletTaskName));
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList ) => prevToDoList.map((task) => task.taskName === taskName ? {...task, checked: !task.checked}: task))
  }
  
  return (
    <>
      <div className="container">
        <h1>task master</h1>

        <TaskInput addTask = {addTask}/>

        <div className="toDoList">
          <span>To Do</span>
          <ul className='list-items'>
            {
              toDoList.map((task, key) => <TaskItem task={task} key={key} deletTask={deletTask} toggleCheck={toggleCheck}/>)
            }
          </ul>
          

          {toDoList.length === 0 ? (<p className='notify'>You are done!</p>) : null}
        </div>
      </div>

      <Stats toDoList={toDoList}/>
    </>
  )
}

export default App
