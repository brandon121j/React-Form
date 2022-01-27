import { useState, useEffect } from React;
import { isAlpha, isEmail, isAlphanumeric, isStrongPassword } from 'validator';

function SignupHooks() {
    
    const [firstErr, setFirstErr] = useState('');
    const [lastErr, setLastErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [userErr, setUserErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [confErr, setConfErr] = useState('');

    const [firstBlur, setFirstBlur] = useState(false);
    const [lastBlur, setLastBlur] = useState(false);
    const [emailBlur, setEmailBlur] = useState(false);
    const [userBlur, setUserBlur] = useState(false);
    const [passBlur, setpassBlur] = useState(false);
    const [confBlur, setConfBlur] = useState(false);

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [conf, setConf] = useState('');

    const [firstClass, setFirstClass] = useState('form-control');
    const [lastClass, setLastClass] = useState('form-control');
    const [emailClass, setEmailClass] = useState('form-control');
    const [userClass, setUserClass] = useState('form-control');
    const [passClass, setPassClass] = useState('form-control');
    const [confClass, setConfClass] = useState('form-control');

    const noErr = () => {
        setClassName('form-control is-valid');
        setEmailErr('');
    }
    
    useEffect(() => {
        if (firstBlur) {
            if (!isAlpha(first)) {
                // setClassName('form-control is-invalid');
                setFirstErr('First name cannot contain numbers')
            } else if (first.length === 0) {
                // setClassName('form-control is-invalid');
                setFirstErr('First name cannot be empty')
            } else {
                noErr();
            }

        }

        if (lastBlur) {
            if (!isAlpha(last)) {
                // setClassName('form-control is-invalid');
                setLastErr('Last name cannot contain numbers')
            } else if (last.length === 0) {
                // setClassName('form-control is-invalid');
                setLastErr('Last name cannot be empty')
            } else {
                noErr();
            }
        }

        if (emailBlur) {
            if (!isEmail(email)) {
                // setClassName('form-control is-invalid');
                setEmailErr('Please enter a valid email');
            } else if (email.length === 0) {
                // setClassName('form-control is-invalid');
                setEmailErr('Email cannot be empty');
            } else {
                noErr();
            }
        }

        if (userBlur) {
            if (user.length < 4) {
                // setClassName('form-control is-invalid');
                setUserErr('Username must be longer than 4 characters');
            } else if (!isAlphanumeric(username)) {
                // setClassName('form-control is-invalid');
                setUserErr('Cannot have special character or number');
            } else if (user.length === 0) {
                // setClassName('form-control is-invalid');
                setUserErr('Username cannot be empty')
            } else {
                noErr();
            }
        }

        if (passBlur) {
            if (!isStrongPassword(pass)) {
                // setClassName('form-control is-invalid');
                setPassErr('Minimum length is 8 characters, 1 lowercase, 1uppercase, 1 symbol');
            } else if (pass.length < 3) {
                // setClassName('form-control is-invalid');
                setPassErr('Password must be 4 characters or longer')
            } else if (pass.length === 0) {
                setClassName('form-control is-invalid');
                setPassErr('');
            }
        }

        if (confBlur) {
            if (conf.length === 0) {
                setConfErr('Confirm password cannot be empty');
                setConfClass('form-control is-invalid');
            } else if (confirm !== password) {
                setConfErr('Passwords must match');
                setConfirmClass('form-control is-invalid');
            } else {
                setConfErr('');
                setConfirmClass('form-control is-valid');
            }
        }

    }, [

    ]
    );


}