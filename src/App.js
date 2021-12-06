import { Routes, Route } from 'react-router-dom';
import { Home, Login, Logout } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
