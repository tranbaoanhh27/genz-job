import React, { useEffect, useState } from "react";
import AuthApi from "../api/AuthApi";

const AppContext = React.createContext({
    user: null,
    setUser: () => {},
});

export default AppContext;

export const AppContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let user = AuthApi.GetCurrentUser();
        if (user) user = user.data;
        setCurrentUser(user);
    }, []);

    return (
        <AppContext.Provider value={{ user: currentUser, setUser: setCurrentUser }}>
            {props.children}
        </AppContext.Provider>
    );
};
