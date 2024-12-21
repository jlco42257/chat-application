import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login.jsx'
import Signin from './views/Signin.jsx'

function App() {
  return (
    <main className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signin' element={<Signin/>} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
