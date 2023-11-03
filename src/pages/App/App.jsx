import { Route, Routes } from 'react-router-dom';

import './App.css';
import Menu from '../Menu/Menu';
import Game from '../Game/Game';


export default function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </main>
  );
}

