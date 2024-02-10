import MyFirstFunctionComponent from './components/learning-examples/MyFunctionComponent'
import {MySecondFunctionComponent} from './components/learning-examples/MyFunctionComponent'
import MyFirstClassComponent from './components/learning-examples/MyClassComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      My ToDo App
      <MyFirstFunctionComponent />
      <MySecondFunctionComponent />
      <MyFirstClassComponent />
    </div>
  )
}


export default App;
