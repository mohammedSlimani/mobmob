import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = 'This field is required';
    } else if (Validator.isEmail(data.email)){

    } else { errors.email = 'Please set a correct form of email';}

    if (isEmpty(data.password)) {
        errors.password = 'This field is required';
    } else if (data.password.length < 8){
        errors.password = 'Please set password > 8';
    } else if (Validator.isAlphanumeric(data.password)) {

    } else { errors.password = 'Please set a correct password'; }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}