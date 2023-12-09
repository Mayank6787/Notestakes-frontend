
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/Nav';
import { HashRouter,Routes, Route } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs';
import EditTask from './components/EditTask';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <section class="backs"> 
      <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CreateTask/>}/>
        <Route path="/create-task" element={<CreateTask/>}/>
        <Route path="/task-list" element={<TaskList/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/edit-task/:id" element={<EditTask/>}/>
        <Route path="/create-notes" element={<CreateNote/>}/>
      </Routes>
   
    </HashRouter></section>
   
  );
}

export default App;
