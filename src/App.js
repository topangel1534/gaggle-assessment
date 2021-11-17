import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'components/HomePage';
import Dashboard from 'components/Dashboard';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
