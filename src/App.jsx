
import './App.css';
import ToDoCreate from './component/TodoCreate';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <div style={{width:'500px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <ToDoCreate/>
        <TodoList />
      </div>
      
    </div>
  );
}

export default App;
