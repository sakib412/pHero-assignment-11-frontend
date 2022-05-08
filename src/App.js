import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer.comp';
import Home from './components/Home/Home.comp';
import Login from './components/Login/Login.comp';
import NavBar from './components/NavBar.comp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className='container mt-5 pt-1' style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventory' element={<div>Hello</div>} />
        <Route path='/inventory/:id' element={
          <PrivateRoute>
            <div>Product page</div>
          </PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<></>} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App