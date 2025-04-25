import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CriarPlayer from './componentes/pages/CriarPlayer';
import ListaDePlayers from './componentes/pages/ListaDePlayers';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CriarPlayer />} />
          <Route path='/players' element={<ListaDePlayers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
