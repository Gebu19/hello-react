
import './App.css'
import Greetings from './components/Greeting'
import User from './components/User'
function App() {
  

  return (
    <>
      <div className='card'> 
        <Greetings/> 
        <User name='Aung Chan Myint'/>
      </div>
    </>
  )
}

export default App
