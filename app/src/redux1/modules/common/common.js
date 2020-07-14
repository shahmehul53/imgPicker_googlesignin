import { setLoader } from "../../type";

const initialState = {
    loading:false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case setLoader:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}
