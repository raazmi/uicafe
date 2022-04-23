import React, { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";

const initialState = {
    cartProducts: []
};

const AppContext = createContext(initialState);

const appActions = (dispatch) => {
    return {
        addToCart: (value) => dispatch({type: "ADD_TO_CART", payload: value}),
    };
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const actions = appActions(dispatch);
    return (
        <AppContext.Provider value={{ ...state, ...actions }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };