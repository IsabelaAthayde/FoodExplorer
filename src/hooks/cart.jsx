import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const CartContext = createContext();

function CartProvider({children}) {
    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem('@foodexplorer:cart');

        if(cart) {
            const convertedCart = JSON.parse(cart);
            setProductsCart(convertedCart)
        }
    }, [])

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
        console.log(copyProductCart)

        const item = await copyProductCart.find(product => product.id === id);
        if(item && item.qtd > 1) {
            item.qtd = item.qtd - 1;

            setProductsCart(copyProductCart);
        } else {
           const cartFiltered = copyProductCart.filter(product => product.id !== id);
           console.log("sera",cartFiltered)

            setProductsCart(cartFiltered);
            console.log("existe", cartFiltered, productsCart)

            localStorage.setItem('@foodexplorer:cart', JSON.stringify(cartFiltered))
        }
    }

    const addProductsToCart = () => {
        localStorage.setItem('@foodexplorer:cart', JSON.stringify(productsCart))
        alert("Adicionado com sucesso!")
    }

    return (
        <CartContext.Provider value={{
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