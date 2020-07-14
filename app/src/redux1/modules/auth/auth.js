import { Get_Otp, Verify_Otp } from '../../type';

const initialState = {
    otp: '',
    otpValid: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Get_Otp:
            return {
                ...state,
                otp: action.payload
            };
        case Verify_Otp:
            return {
                ...state,
                otpValid: action.payload
            };
        default:
            return state;
    }
}
