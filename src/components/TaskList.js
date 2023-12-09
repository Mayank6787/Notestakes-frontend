import Axios from "axios";
import { useEffect, useState } from "react";
import TaskListRows from "./TaskListRows";
import '../styles/TaskList.css'

function TaskList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://backendnoter.onrender.com/taskRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <TaskListRows key={ind} obj={val} />;
    });
  };

  return (
    <div className="body ">
      <div className="grid-container">{ListItems()}</div>
    </div>
  );
}

export default TaskList;

