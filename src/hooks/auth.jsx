import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{name: 'Isabela', email: "isabela@gmail.com"}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth };