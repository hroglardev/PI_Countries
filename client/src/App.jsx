import { useLocation, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home/Home'

import Form from './views/Form/Form'
import Detail from './views/Detail/Detail'
import Nav from './components/Nav/Nav'
import Landing from './views/Landing/Landing'
function App() {
  const location = useLocation()

  const showNav = location.pathname !== '/'

  return (
    <div className='App'>
      {showNav && <Nav />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
