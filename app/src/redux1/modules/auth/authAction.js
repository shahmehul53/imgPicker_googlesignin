const { Get_Otp, setLoader, Verify_Otp } = require("../../type");
import { getData } from '../../../utils/api';
export const getOtp = (phoneNumber) => dispatch => {
    dispatch({ type: setLoader, payload: true })
    getData("POST", phoneNumber, "users/phone_verification_code", "")
        .then(otp =>
            dispatch(
                {
                    type: Get_Otp,
                    payload: otp.data.user
                })
        )
        .catch(error => {
            console.log(error);
        });
    dispatch({ type: setLoader, payload: false })
};


export const verifyOtp = (data) => dispatch => {
    dispatch({ type: setLoader, payload: true })
    getData("POST", data, "users/phone_verification", "")
        .then(result =>
            dispatch(
                {
                    type: Verify_Otp,
                    payload: result
                })
        )
        .catch(error => {
            console.log(error);
        });
    dispatch({ type: setLoader, payload: false })
};
