import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home';
import SnakePage from './pages/Snake';
import TresEnRayaPage from './pages/TresEnRaya';
import MemoriaPage from './pages/Memoria';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memoria" element={<MemoriaPage />} />
          <Route path="/snake" element={<SnakePage />} />
          <Route path="/tres-en-raya" element={<TresEnRayaPage />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}


export default App;
