import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
