import { useState, useEffect } from React;
import { isAlpha, isEmail } from 'validator';

function SignupHooks() {
    const [className, setClassName] = useState('form-control');
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
    const [conf, setConf] = useState('')
    
    
    useEffect(() => {
        if (firstBlur) {
            if (!isAlpha(first)) {
                setClassName('form-control is-invalid');
                setFirstErr('First name cannot contain numbers')
            } else if (first.length === 0) {
                setClassName('form-control is-invalid');
                setFirstErr('First name cannot be empty')
            } else {
                setFirstErr('');
                setClassName('form-control is-valid');
            }

        }

        if (lastBlur) {
            if (!isAlpha(last)) {
                setClassName('form-control is-invalid');
                setLastErr('Last name cannot contain numbers')
            } else if (last.length === 0) {
                setClassName('form-control is-invalid');
                setLastErr('Last name cannot be empty')
            } else {
                setClassName('form-control is-valid');
                setLastErr('');
            }
        }

        if (emailBlur) {
            if (email.length === 0) {
                setEmailErr('Email cannot be empty');
                setClassName('form-control is-invalid');
            } else if (!isEmail(email)) {
                setEmailErr('Please enter a valid email');
                setClassName('form-control is-invalid');
            } else {
                setEmailErr('');
                setClassName('form-control is-valid');
            }
        }

        if (userBlur) {
            
        }

        if (passBlur) {
            
        }

        if (confBlur) {

        }

    }, [])
}