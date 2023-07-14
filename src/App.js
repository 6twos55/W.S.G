import './styles/App.scss';
import Navbar from './components/Navbar';
import TopImage from './components/TopImage';
import Contact from './components/Contact';
import About from './views/About';
import Footer from './components/Footer';
import Register from './views/Register';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <TopImage />
      <Contact />

      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
