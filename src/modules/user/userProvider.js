import { useReducer } from "react"
import { initialUserState, userReducer } from "./userReducer"
import { UserContext } from "./userContext";



export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialUserState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}