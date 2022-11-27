
const initialState = {
    user: "",
    id: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {  ...state, ...action.payload };
        case "REMOVE_USER":
            return initialState;
        default:
            return state;
    }
};

export default authReducer;