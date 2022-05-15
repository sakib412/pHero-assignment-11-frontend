import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import Footer from './components/Footer/Footer.comp';
import Home from './components/Home/Home.comp';
import Login from './components/Login/Login.comp';
import NavBar from './components/NavBar/NavBar.comp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register.comp';
import ItemDetails from './components/ItemDetails/ItemDetails.com';
import AddItem from './components/AddItem/AddItem.comp';
import ManageInventory from './components/ManageInventory/ManageInventory.comp';

const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className='container mt-5 pt-3'
      style={{ minHeight: '80vh' }}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<div>Blogs</div>} />
        <Route
          path='/inventory'
          element={
            <PrivateRoute>
              <ManageInventory />
            </PrivateRoute>} />
        <Route
          path='/inventory/:id'
          element={
            <PrivateRoute>
              <ItemDetails />
            </PrivateRoute>} />
        <Route
          path='add-item'
          element={
            <PrivateRoute>
              <AddItem />
            </PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
    <ToastContainer />
    <Footer />
  </>
);

export default App