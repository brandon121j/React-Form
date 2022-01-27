import { useState, useEffect } from React;
import { isAlpha } from 'validator';

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
            
            
        }

        if (emailBlur) {
            
        }

        if (userBlur) {
            
        }

        if (passBlur) {
            
        }

        if (confBlur) {

        }

    }, [])
}