
// TODO: refactoring for this code

export const validateEmail = email => {
    let checkMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkMail.test(email);
};

export const validateIdenticalPasswords = (password, password_repeat) => {
    let checkPassword = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    /*
    ^.*              : Start
    (?=.{8,})        : Length
    (?=.*[a-zA-Z])   : Letters
    (?=.*\d)         : Digits
    (?=.*[!#$%&? "]) : Special characters
    .*$              : End
    */

    let validated_passwords = {
        valid: checkPassword.test(password),
        identical: password === password_repeat,
    };
    return validated_passwords
};

export const validateLogin = credentials => {
    let email = !!credentials.email;
    let password = !!credentials.password;
    let validated_credentials = email && password;
    let check = {
        email,
        password,
        validated_credentials
    };
    return check;
};

export const validateResetPasswordInput = user_input => {
    const validated_passwords = true; //validateIdenticalPasswords(user_input.password, user_input.password_repeat);
    let validated_data = {
        email: user_input.email === '' ? false : true,
        token: user_input.token === '' ? false : true,
        //password_valid: validated_passwords.valid,
        //passwords_identical: validated_passwords.identical
    };
    return validated_data;
};

export const validateRegistrationValidation = user_input => {
    const validated_passwords = true;  validateIdenticalPasswords(user_input.password, user_input.password_repeat);
    let validated_data = {
        email: user_input.email === '' ? false : true,
        username: user_input.username === '' ? false : true,
        // token: user_input.token === '' ? false : true,
        //password_valid: validated_passwords.valid,
        //passwords_identical: validated_passwords.identical
    };
    return validated_data;
};
