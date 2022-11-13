import { sections } from "../data/itemLists";

const initialState = {
    sections,
    cart: [],
    totals: { quantity: 0, price: "" }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case "CHANGE_ITEM_QTY":
            return {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty
                )
            }
        case "SORT_BY_NAME":
            return {
                ...state,
                sections: state.sections.filter((section, index) => 
                    index === action.payload ? section.sort((a, b) => a.name > b.name ? 1 : -1) : section
                )
            }
        case "SORT_BY_PRICE":
            return {
                ...state,
                sections: state.sections.filter((section, index) => 
                    index === action.payload ? section.sort((a, b) => a.price - b.price) : section
                )
            }
        case "CALC_TOTALS":
            return {
                ...state,
                totals: {
                quantity: state.cart.reduce((acc, curr) => acc + Number(curr.qty), 0),
                price: state.cart
                    .reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
                    .toFixed(2)
                }
            }
        default:
            return state;
    }
};

export default cartReducer;