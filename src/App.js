import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer.comp';
import Home from './components/Home/Home.comp';
import NavBar from './components/NavBar.comp';


const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className='container mt-5 pt-1' style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventory' element={<div>Hello</div>} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App