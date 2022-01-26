import { useState, useEffect } from React;

function SignupHooks() {
    const [firstErr, setFirstErr] = useState('');
    const [lastErr, setLastErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [userErr, setUserErr] = useState('');
    const [passErr, setPassErr] = useState('');

    const [firstBlur, setFirstBlur] = useState(false);
    const [lastBlur, setLastBlur] = useState(false);
    const [emailBlur, setEmailBlur] = useState(false);
    const [userBlur, setUserBlur] = useState(false);
    const [passBlur, setpassBlur] = useState(false);

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    
    const [firstErr, setFirstErr] = useState('');
    const [lastErr, setLastErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [userErr, setUserErr] = useState('');
    const [passErr, setPassErr] = useState('');
}