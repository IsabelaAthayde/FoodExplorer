import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Details } from '../Pages/Details';
import { Menu } from '../Pages/Menu';
import { New } from '../Pages/New';
import { Edit } from '../Pages/Edit';
import { Favorites } from '../Pages/Favorites';
import { Payment } from '../Pages/Payment';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    )
}