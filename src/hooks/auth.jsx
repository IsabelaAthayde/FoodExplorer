import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    const [image, setImage] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")
    
        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user),
                })
        }

    }, [])

    async function signIn({email, password }) {

        try {
            const response = await api.post("/sessions", {email, password})
            const { user , token } = response.data;

            localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
            localStorage.setItem('@foodexplorer:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user, token})

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@foodexplorer:user')
        localStorage.removeItem('@foodexplorer:token')

        setData({})
    }

    async function createMeal({mealUpdated, mealImageFile}) {
        try {
            setImage(mealImageFile);

            const fileUploadForm = new FormData();
            fileUploadForm.append("image", mealImageFile);

            const posted = await api.post("/meals", mealUpdated);
            
            if(posted) {
                if(!mealUpdated.title) {
                    alert("preencha o campo de titulo");
                    return;
                }

                const response = await api.get(`/meals?title=${mealUpdated.title}`)
                
                await api.patch(`/meals/image/${response.data[0].id}`, fileUploadForm);
            };
            
            alert("Prato cadastrado com sucesso!")
            return true;
            
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                console.error(error)
                return
            }
        }
    }

    async function useMeal({ id, title }) {
        let meal;
        if(id) {
            const response = await api.get(`/meals/${id}`)
            meal = response;
        } else if(title) {
            const response = await api.get(`/meals?title=${title}`)
            meal = response;
        } else { 
            const response = await api.get(`/meals`)
            meal = response;
        }
        return {...meal};
    }

    async function updateMeal({ mealUpdated, mealImageFile, id }) {
        try {
            const meal = useMeal({id})

            if(!mealUpdated.title) {
                mealUpdated.title = meal.title;
            }
            if(!mealUpdated.category || mealUpdated.category == "default") {
                mealUpdated.category = meal.category;
            }
            if(!mealUpdated.description) {
                mealUpdated.description = meal.description;    
            }

            if(!mealUpdated.price) {
                mealUpdated.price = meal.price;

            }
            
            if(mealImageFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("image", mealImageFile);

                const response = await api.patch(`/meals/image/${id}`, fileUploadForm)
                mealUpdated.image = response.data.image;
            }

            await api.put(`/meals/${id}`, mealUpdated);

            
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                console.error(error)
            }
        }
    }

    return (
        <AuthContext.Provider value={{
        signOut, 
        signIn, 
        user: data.user,
        updateMeal,
        useMeal,
        image,
        createMeal
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth };