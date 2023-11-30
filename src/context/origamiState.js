import { useReducer } from "react";
import origamiReducer from "./origamiReducer";
import { userAPI } from "../api/api";
import { LOGIN_USER, LOGOUT_USER } from "./types";
import OrigamiContext from "./origamiContext";


const OrigamiState = (props) => {
    const initialState = {
        user: null
    }

    const [state, dispatch] = useReducer(origamiReducer, initialState);

    const loginUser = async (formData ) => {
        console.log(formData);
        try {
            // Assuming userAPI.login() returns a promise
            const response = await userAPI.loginUser({
                username: formData.username,
                password: formData.password,
            });
            console.log(response);
            // Login successful
            alert("Login successful!");
            dispatch({ type: LOGIN_USER, payload: response.data }); // Pass the user data to the reducer
        } catch (error) {
            // Login failed
            console.error(error);
            alert("Login failed. Please try again.");
        }

    }

    const logoutUser = async () => {
        console.log("logout");
        const response = await userAPI.logoutUser();
        console.log(response);
        if(response.status === 200){
            dispatch({ type: LOGOUT_USER });
        }
    }

    // Fix

    return (
        <OrigamiContext.Provider value={{ user: state.user, loginUser,logoutUser }}>
            {props.children}
        </OrigamiContext.Provider>
    )
}
export default OrigamiState;

