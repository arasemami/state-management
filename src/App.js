import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Context from './pages/Context';
import { MyProvider } from './modules/user/userContext';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div>
      <nav className="space-x-4 p-4 bg-gray-100">
        <Link to="/context">Context</Link>
        <Link to="/about">about</Link>
        <Link to="/products">Product List</Link>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/context"
          element={
            <MyProvider>
              <Context />
            </MyProvider>
          }
        />
        <Route path="/about" element={<About />} />
       <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
