import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Main.css';
import './button.css';
import './game.css';
import Main, {Menu, Group} from './Main';
import {Game} from './Game'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/grupy" element={<Group />} />
            <Route path="/gra" element={<Game />} />
        </Routes>
    </Router>
);
