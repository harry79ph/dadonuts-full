
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
};

export const removeFromCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product
    }
};

export const changeItemQty = (item, qty) => {
    return {
        type: "CHANGE_ITEM_QTY",
        payload: {
            id: item.id,
            qty
        }
    }
};

export const sortByName = (index) => {
    return {
        type: "SORT_BY_NAME",
        payload: index
    }
};

export const sortByPrice = (index) => {
    return {
        type: "SORT_BY_PRICE",
        payload: index
    }
};

export const calcTotals = () => {
    return {
        type: "CALC_TOTALS"
    }
}