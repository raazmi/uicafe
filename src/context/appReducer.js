export const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existItemIndex = state.cartProducts.findIndex(
                (item) =>
                    item.product_id === action.payload.product_id
            );

            if (existItemIndex > -1) {
                const cartNewState = [...state.cartProducts];
                cartNewState[existItemIndex].quantity += action.payload.quantity || 1;

                localStorage.setItem("cartProducts", JSON.stringify(cartNewState));

                return { ...state, cartProducts: cartNewState }
            } else {
                localStorage.setItem(
                    "cartProducts",
                    JSON.stringify([...state.cartProducts, action.payload])
                );
                return { ...state, cartProducts: JSON.parse(localStorage.getItem("cartProducts")) }
            }


        case 'REMOVE_FROM_CART':
            let getResult;
            if (state.cartProducts) {
                getResult = state.cartProducts?.reduce((acc, item) => {
                    if (
                        item.product_id === action.payload.product_id
                    ) {
                        const newQty = item.quantity - action.payload.quantity;

                        return newQty > 0
                            ? [...acc, { ...item, quantity: newQty }]
                            : [...acc];
                    }
                    return [...acc, item];
                }, []);
            }
            localStorage.setItem("cartProducts", JSON.stringify(getResult));
            return { ...state, cartProducts: JSON.parse(localStorage.getItem("cartProducts")) }

        default:
            return state;
    }
};