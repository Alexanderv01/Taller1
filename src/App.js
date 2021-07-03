
import './App.css';
//import Users from "./Components/cards/users"
import Calculadora from'./components/Calcu/Calculadora'
import List from './components/card/List';
function App(){
    return(
      <div className="App">
        <p className= 'text-primary bg-info'>
        <h1>Taller De Construcción - Alexander Quintanilla  </h1> </p>
        <Calculadora/>
        <List/>

      
      </div>
    )
    
  }
  export default App;

