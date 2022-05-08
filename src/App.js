import './App.css'
import Footer from './components/Footer/Footer.comp';
import Home from './components/Home/Home.comp';
import NavBar from './components/NavBar.comp';


const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className='container mt-5' style={{ minHeight: '100vh' }}>
      <Home />
    </main>
    <Footer />
  </>
);

export default App