import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContex = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }
    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    

    const authInfo = {user, creatUser,signInUser}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}