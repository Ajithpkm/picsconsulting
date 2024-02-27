import * as Constants from '../Constants/Pics';

//initial value
const INITIAL_STATE = {
    homedata: {},
    headandfooterdata: {},
    aboutusdata: {},
    universitydata: [],
    countrydata: [],
    faqdata: {},
    faqcategorydata: [],
    faqlistdata: [],
    contactdata: {}
};

//to assign action object to store variable
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.HOMEPICSDATA:
            return { ...state, homedata: action.payload.HOMEPICSDATA }
        case Constants.HEADANDFOOTERPICSDATA:
            return { ...state, headandfooterdata: action.payload.HEADANDFOOTERPICSDATA }
        case Constants.ABOUTSPICSDATA:
            return { ...state, aboutusdata: action.payload.ABOUTSPICSDATA }
        case Constants.UNIVERSITYPICSDATA:
            return { ...state, universitydata: action.payload.UNIVERSITYPICSDATA }
        case Constants.COUNTRYPICSDATA:
            return { ...state, countrydata: action.payload.COUNTRYPICSDATA }
        case Constants.CONTACTPICSDATA:
            return { ...state, contactdata: action.payload.CONTACTPICSDATA }
        case Constants.FAQPICSDATA:
            return { ...state, faqdata: action.payload.FAQPICSDATA }
        case Constants.FAQCATEGORYPICSDATA:
            return { ...state, faqcategorydata: action.payload.FAQCATEGORYPICSDATA }
        case Constants.FAQLISTPICSDATA:
            return { ...state, faqlistdata: action.payload.FAQLISTPICSDATA }
        default:
            return state
    }
}

export default reducer;