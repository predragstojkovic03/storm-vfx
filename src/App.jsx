import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/lala' element={<p>Lalal radasd</p>} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
