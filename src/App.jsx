import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
      
        <Router>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact"  element={<Contact />} />
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App;