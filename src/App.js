import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Context from './pages/Context';
import { UserProvider } from './modules/user/userProvider';

function App() {
  return (
    <div>
      <nav className="space-x-4 p-4 bg-gray-100">
        <Link to="/context">Context</Link>
        <Link to="/about">about</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/context"
          element={
            <UserProvider>
              <Context />
            </UserProvider>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
