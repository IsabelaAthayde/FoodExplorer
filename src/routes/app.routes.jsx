import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Details } from '../Pages/Details';
import { Menu } from '../Pages/Menu';
import { New } from '../Pages/New';
import { Edit } from '../Pages/Edit';
import { Favorites } from '../Pages/Favorites';
import { Payment } from '../Pages/Payment';
import { OrderHistory } from '../Pages/OrderHistory';

import { useAuth } from '../hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AppRoutes() {
    const { user } = useAuth();

    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(()=>{
        if(user.role === 'admin') {
            setIsAdmin(true);
        }
    }, [])

    return (
        <Routes >
            <Route path="/" element={<Home isAdmin={isAdmin}/>}/>
            <Route path="/menu" element={<Menu isAdmin={isAdmin}/>}/>
            <Route path="/details/:id" element={<Details isAdmin={isAdmin}/>}/>
            <Route path="/favorites" element={<Favorites isAdmin={isAdmin}/>}/>
            <Route path="/payment" element={<Payment isAdmin={isAdmin}/>}/>
            <Route path="/order-history" element={<OrderHistory isAdmin={isAdmin}/>}/>
            <Route path="/new" element={<New isAdmin={isAdmin}/>}/>,
            <Route path="/edit/:id" element={<Edit isAdmin={isAdmin}/>}/>
        </Routes>
    )
}