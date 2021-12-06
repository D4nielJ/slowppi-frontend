import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup } from './pages';
import '@fontsource/righteous';
import '@fontsource/open-sans';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
