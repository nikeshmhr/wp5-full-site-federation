const initialState = [
    "Axe",
    "Abbadon",
    "Winter Wyvern",
    "Invoker",
    "Sniper"
];


const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case "SET_USERS":
            return [...payload];

        case "ADD_USER":
            return [...state, payload];

        default:
            return state;
    }
};

export default reducer;