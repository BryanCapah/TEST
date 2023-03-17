import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Register from './pages/register'
import Backround from './components/Background';

function App() {
  return (
    <Backround>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Dashboard />} />
        </Routes>
      </Router>
    </Backround>
  )
}

export default App;
