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
        <Routes >
            <Route path="/" element={<Home isAdmin/>}/>
            <Route path="/menu" element={<Menu isAdmin/>}/>
            <Route path="/details/:id" element={<Details isAdmin/>}/>
            <Route path="/new" element={<New isAdmin/>}/>
            <Route path="/edit/:id" element={<Edit isAdmin/>}/>
            <Route path="/favorites" element={<Favorites isAdmin/>}/>
            <Route path="/payment" element={<Payment isAdmin/>}/>
        </Routes>
    )
}