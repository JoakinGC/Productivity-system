import './App.css';
import logoPrincipal from './img/principal.png';
import ListTask from './componentes/ListTasks';

function App() {
  return (
    <div className="application-do-tasks">
      <div className="logo-contenedor">
        <img 
          src={logoPrincipal}
          className="logo-img"
        />
      </div>
      <div className="task-list-main">
        <h1>My tasks</h1>
        <ListTask/>
      </div>
    </div>
  );
}

export default App;
