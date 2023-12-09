import Axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../styles/Boxy.css'

function TaskListRows(props) {
  const { _id, tasks, dis } = props.obj;

  const handleClick = () => {
    Axios.delete(`https://backendnoter.onrender.com/taskRoute/delete-task/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };
 
  return (
    <div class="boxy" key={_id} >
      <p>{tasks}</p>
      <p>{dis}</p>
      <div>
        <button className="btn">
          <Link className="text-decoration-none text-dark" to={`/edit-task/${_id}`}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
        </button>
        <button onClick={handleClick} className="btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default TaskListRows;
