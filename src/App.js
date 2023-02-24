import { motion } from 'framer-motion';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={
            <motion.button whileHover={{ scale: 1.1 }}>Klikni me</motion.button>
          }
        />
        <Route path='/lala' element={<p>Lalal radasd</p>} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
