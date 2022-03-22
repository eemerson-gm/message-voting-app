
import './App.css';
import './css/bootstrap.min.css';
import List from './components/list';
import Textbox from './components/textbox';

function App() {

  return (
    <div className="App">
      <b><h1 className="text-center text-light">MESSAGE VOTING BOARD</h1></b>
      <i><h4 className="text-center text-light">Rate the best message to the top!</h4></i>
      <Textbox />
      <List />
    </div>
  );

}

export default App;
