import logo from './logo.svg';
import FormInput from './components/FormInput';
// import Button from './components/Button';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo"/>
          <h3>Task List</h3>
      </div>
      <div className="list">
        <TodoItem/>
      </div>
      <div className="input-form">
        <FormInput/>
      </div>
    </div>
  );
}

export default App;
