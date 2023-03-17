import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'
import Backround from './components/Background';
import { useEffect } from 'react';
import Onboarding from './pages/onboarding';

function App() {
  useEffect(_ => {
    localStorage.setItem('language', 'id')
  }, [])
  return (
    <Backround>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<Onboarding />} />
        </Routes>
      </Router>
    </Backround>
  )
}

export default App;
