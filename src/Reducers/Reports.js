import * as Constants from '../Constants/Reports';

//initial value
const INITIAL_STATE = {
    Reports: [],
    pathName: '',
    pageNumber: ''
};

//to assign action object to store variable
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.REPORTS:
            return { ...state, Reports: action.payload.Reports }
        case Constants.PATHNAME:
            return { ...state, pathName: action.payload.pathName }
            case Constants.PAGENUMBER:
            return { ...state, pageNumber: action.payload.pageNumber }
        default:
            return state
    }
}

export default reducer;