import './App.css'
import Home from './pages/home'
import AllProject from './pages/allproject'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<AllProject/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
