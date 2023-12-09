import { useState } from "react";
import TaskForm from "./TaskForm";
import Axios from 'axios'
function CreateTask() {

  const [arr, setArr] = useState([])

  const getState = (childData) =>{
    setArr(childData);
  }

  const handleSubmit = () =>{
    const data = {tasks:arr[0], dis:arr[1]};
    Axios.post("https://backendnoter.onrender.com/taskRoute/create-task",data)
    .then((res)=>{ 
      if(res.status === 200){
        alert("Record added succesfully")
        window.location.reload();
      }
      else{
        Promise.reject();
      }
    }
     
    )
    .catch((err)=>alert(err));
  }
  return (
    <form onSubmit={handleSubmit}>
      <TaskForm getState={getState}/>
    </form>
  );
}

export default CreateTask;
