import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/main/Home';
import Login from './pages/admin/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
