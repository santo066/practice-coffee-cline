import { createContext, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";



export const AuthContex = createContext(null)

// const auth = getAuth(app);

const auth = getAuth(app);



export default function AuthProvider({ children }) {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userinfo = {
        user,
        loading,
        createUser,
        login
    }
    return (
        <AuthContex.Provider value={userinfo}>
            {
                children
            }
        </AuthContex.Provider>
    )
}