const initialState =false;

const reducer = (state = initialState, { type }) => {
    switch(type) {
        case "TOGGLE_IS_ADMIN":
            return !state;

        default:
            return state;
    }
};

export default reducer;