import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Context from './pages/Context';
import { MyProvider } from './modules/user/userContext';
import ProductList from './pages/ProductList';
import { Provider } from 'react-redux';
import store from './modules/redux/store';
import CounterPage from './pages/CounterPage';
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./pages/About'));

function App() {

  return (
    <div>
      <nav className="navbar">
        <Link to="/context">Context</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Product List</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/">Home</Link>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>

        <Routes>
          <Route
            path="/context"
            element={
              <MyProvider>
                <Context />
              </MyProvider>
            }
          />
          <Route
            path="/counter"
            element={
              <Provider store={store}>
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-4">Redux Counter</h1>
                  <CounterPage />
                </div>
              </Provider>
            }
          />
          <Route path="/about" element={<About />} />

          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
