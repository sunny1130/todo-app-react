
import './App.css';
import ToDoApp from './components/todo/ToDoApp';

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
      
      {/*<MyFirstFunctionComponent />
      <MySecondFunctionComponent />
      <MyFirstClassComponent />
      <h1>{person.name}</h1>
      <div>{person.printSocial()}</div>
      <Counter />*/}
      <ToDoApp />

    </div>
  )
}


export default App;
