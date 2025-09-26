
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'

import './App.css'
import { Main } from './pages/main'
import { SignIn } from './pages/sign-in'
import { Room } from './pages/room'

function App() {


  return (
    <Router>

      <Routes>

          <Route path='/' element = {<Main/>} />
          <Route path='/signin' element = {<SignIn/>} />
          <Route path='/room' element = {<Room/>} />


      </Routes>

    </Router>

  
  )
}

export default App
