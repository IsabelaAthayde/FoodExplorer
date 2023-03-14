import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const CartContext = createContext();

function CartProvider({children}) {
    const [productsCart, setProductsCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem('@foodexplorer:cart');
        const favoriteProducts = localStorage.getItem('@foodexplorer:favorites')

        if(cart) {
            const convertedCart = JSON.parse(cart);
            setProductsCart(convertedCart)
        }

        if(favoriteProducts) {
            const favoriteProductsConverted = JSON.parse(favoriteProducts);
            setFavorites(favoriteProductsConverted)
        }
    }, [])

    const addToFavorites = async (id) => {
        const copyFavorites = [...favorites];

        const favoriteItem = await copyFavorites.find(item => item.id === id);

        if(!favoriteItem) {
            const response = await api.get(`meals/${id}`);
            response.data.image = `${api.defaults.baseURL}/files/${response.data.image}`
            copyFavorites.push(response.data)

            localStorage.setItem('@foodexplorer:favorites', JSON.stringify(copyFavorites))

            setFavorites(copyFavorites)
        } else {
            const undoFavorite = copyFavorites.filter(item => item.id !== id);

            localStorage.setItem('@foodexplorer:favorites', JSON.stringify(undoFavorite))

            setFavorites(undoFavorite)
        }        
    }

    const incrementProductQuantity = async (id) => {
        const copyProductCart = [...productsCart];

        const item = copyProductCart.find(product => product.id === id);

        if(!item) {
            const response = await api.get(`meals/${id}`);
            response.data.image = `${api.defaults.baseURL}/files/${response.data.image}`

            copyProductCart.push({...response.data, qtd: 1})
        } else {
            item.qtd = item.qtd + 1;
        }

        setProductsCart(copyProductCart)
    }

    const removeProductFromCart = async (id) => {
        const copyProductCart = [...productsCart];

        const item = await copyProductCart.find(product => product.id === id);
        if(item && item.qtd > 1) {
            item.qtd = item.qtd - 1;

            setProductsCart(copyProductCart);
        } else {
           const cartFiltered = copyProductCart.filter(product => product.id != id);

            setProductsCart(cartFiltered);

            localStorage.setItem('@foodexplorer:cart', JSON.stringify(cartFiltered))
        }
    }

    const addProductsToCart = () => {
        localStorage.setItem('@foodexplorer:cart', JSON.stringify(productsCart))
        alert("Adicionado com sucesso!")
    }

    return (
        <CartContext.Provider value={{
        favorites,
        addToFavorites,
        productsCart,
        incrementProductQuantity,
        addProductsToCart,
        removeProductFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCartContext() {
    const context = useContext(CartContext);

    return context;
}

export { CartProvider, useCartContext };