import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={<Homepage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
          />
          <Route path='/lala' element={<p>Lalal radasd</p>} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
