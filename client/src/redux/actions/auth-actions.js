
export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
};

export const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}