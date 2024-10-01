import React, { useState } from 'react';
import Password from './password/password';


export default function Generator() {
    const [formState, setFormState] = useState({
        charLength: 0,
        upperCase: false,
        lowerCase: false,
        numeric: false,
        specialChar: false,
});

    const [charSet, setCharSet] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    

const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
        ...formState,
       [name]: value,
    });
};

const handleCheckChange = (e) => {
    const {name, checked} = e.target;
    setFormState({
        ...formState,
        [name]: checked,
    });
};

const handleDisplay = () => {
    setIsVisible(true);
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    let newCharSet = '';
    if (formState.upperCase) newCharSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (formState.lowerCase) newCharSet += 'abcdefghijklmnopqrstuvwxyz';
    if (formState.numeric) newCharSet += '0123456789';
    if (formState.specialChar) newCharSet += '`~@#$%^&*()-_=+?<>';

    if (!formState.charLength || newCharSet === '') {
        return alert('Please complete the form!');
    }

    if (formState.charLength < 10) {
        alert('Please enter at least 10 characters');
    }

    if(formState.charLength > 35) {
        alert('Password can only be 35 characters!');
    }

    let newPassword = '';
        for (let i = 0; i < formState.charLength; i++) {
            const randomIndex = Math.floor(Math.random() * newCharSet.length);
            newPassword += newCharSet[randomIndex];
        }

        setPassword(newPassword);
};
    return(
    <div className='card'>
        <div className='card-content'>
            <h2 className='is-size-4'>Generate Password</h2>
       <form onSubmit={handleFormSubmit}>
            <div className='field mt-3'>
                <label className='label'>Password Length (Min: 10; Max: 35;)</label>
                <input
                className='input'
                    type="number"
                    name="charLength"
                    onChange={handleInputChange}
                    placeholder="Password length"
                />
                </div>
                <label>
                    <input
                    className='checkbox ml-2'
                        type="checkbox"
                        name="upperCase"
                        onChange={handleCheckChange}
                    /> Uppercase Letters
                </label>
                <label>
                    <input
                    className='checkbox ml-2'
                        type="checkbox"
                        name="lowerCase"
                        onChange={handleCheckChange}
                    /> Lowercase Letters
                </label>
                <label>
                    <input
                    className='checkbox ml-2'
                        type="checkbox"
                        name="numeric"
                        onChange={handleCheckChange}
                    /> Numbers
                </label>
                <label>
                    <input
                    className='checkbox ml-2'
                        type="checkbox"
                        name="specialChar"
                        onChange={handleCheckChange}
                    /> Special Characters
                </label>
                <button onClick={handleDisplay} id='submit-btn' className='button is-link has-text-white mt-3' type="submit">Generate Password</button>
            </form>
            {isVisible && (
                <Password password={password} />
            )}
            </div>
    </div>
    );
}