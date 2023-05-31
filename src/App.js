import Display from './Display'
import './App.css';
import DisplayAgain from './DisplayAgain';

function App() {
  return (
    <>
    <Display name="Zak" company="Google" profession="Software Developer"/> 
    <hr></hr> 

    <DisplayAgain Tech="React" num={23}/>                      
    </>        
    
  );
}

export default App;
