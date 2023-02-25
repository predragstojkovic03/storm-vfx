import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/lala' element={<p>Lalal radasd</p>} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
