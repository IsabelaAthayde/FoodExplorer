import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Details } from '../Pages/Details';
import { Menu } from '../Pages/Menu';
import { New } from '../Pages/New';
import { Edit } from '../Pages/Edit';
import { Favorites } from '../Pages/Favorites';
<<<<<<< HEAD
import { Config } from '../Pages/Config';
=======
>>>>>>> 3ae49310352cf5a19d9e7f16387b28f6368563cd
import { Payment } from '../Pages/Payment';
import { OrderHistory } from '../Pages/OrderHistory';

import { useAuth } from '../hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AppRoutes() {
    const { user } = useAuth();

<<<<<<< HEAD
=======
    const navigate = useNavigate();

>>>>>>> 3ae49310352cf5a19d9e7f16387b28f6368563cd
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
<<<<<<< HEAD
            <Route path="/config" element={<Config isAdmin={isAdmin}/>}/>
=======
>>>>>>> 3ae49310352cf5a19d9e7f16387b28f6368563cd
            <Route path="/payment" element={<Payment isAdmin={isAdmin}/>}/>
            <Route path="/order-history" element={<OrderHistory isAdmin={isAdmin}/>}/>
            <Route path="/new" element={<New isAdmin={isAdmin}/>}/>,
            <Route path="/edit/:id" element={<Edit isAdmin={isAdmin}/>}/>
        </Routes>
    )
}