
const initialState = {
    user: "",
    email: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {  ...state, user: action.payload.name, email: action.payload.email }
        case "REMOVE_USER":
            return {  ...state, user: "", email: "" }
        default:
            return state;
    }
};

export default authReducer;