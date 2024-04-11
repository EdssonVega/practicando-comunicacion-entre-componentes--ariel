import logo from './logo.svg';
import './App.css';
import InputText from './components/inputText/inputText';
import TextField from './components/textField/textField';
import Button from './components/button/button';
import Modal from "./components/modal/modal"

function App() {
  return (
    <div className="App">
      <form>
        <h1>Lets get in touch!</h1>
        <InputText />
        <TextField />
        <Button />
      </form>
      <Modal />
    </div>
  );
}

export default App;
