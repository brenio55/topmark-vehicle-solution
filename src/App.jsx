import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/main/Home';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
