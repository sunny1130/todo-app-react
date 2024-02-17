import MyFirstFunctionComponent from './components/learning-examples/MyFunctionComponent'
import {MySecondFunctionComponent} from './components/learning-examples/MyFunctionComponent'
import MyFirstClassComponent from './components/learning-examples/MyClassComponent'
import './App.css';
import Counter from './components/counter/Counter';

const person = {
  name: 'sunmeet',
  arrayListSocial: ['Facebook','TikTok','Instagram'],
  printSocial: () => {
    person.arrayListSocial.forEach(
      eachSocial => console.log(eachSocial)
    )
  }
}

function App() {
  return (
    <div className="App">
      My ToDo App
      <MyFirstFunctionComponent />
      <MySecondFunctionComponent />
      <MyFirstClassComponent />
      <h1>{person.name}</h1>
      <div>{person.printSocial()}</div>
      <Counter/>
      
    </div>
  )
}


export default App;
