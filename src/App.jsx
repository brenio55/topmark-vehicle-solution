import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/main/Home';
import Login from './pages/admin/Login';
import Showroom from './pages/showroom/Showroom';
import Working from './pages/working/Working';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/showroom' element={<Working/>} />
          <Route path='/working' element={<Working/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
