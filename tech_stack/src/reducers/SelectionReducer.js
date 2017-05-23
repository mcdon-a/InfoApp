//You need to return a basic value that's not undefined
export default (state = null, action) => {
    //Boilerplate reducer code
    switch (action.type) {
        case 'select_library':
            return action.payload;

        default:
            return state;
    }
};
