import React, { useState } from 'react';

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
        alert('Your password must be 10 characters long!');
    }

    if (formState.charLength > 35 ) {
        alert('Character length is only 280 characters!');
    }

    let newPassword = '';
        for (let i = 0; i < formState.charLength; i++) {
            const randomIndex = Math.floor(Math.random() * newCharSet.length);
            newPassword += newCharSet[randomIndex];
        }

        setPassword(newPassword);
};
    return(
    <div id='card' className='card mt-5'>
        <div className='card-content'>
            <h2 className='is-size-4 mb-5'>Generate Password</h2>
            <div className='form'>
       <form onSubmit={handleFormSubmit}>
        <div className='field'>
            <label className='label'>Password Length (Min: 10; Max: 35)</label>
            <div className='control'>
                <input
                    className='input'
                    type="number"
                    name="charLength"
                    onChange={handleInputChange}
                    placeholder="Password length"
                />
                </div>
                </div>
                <label className='checkbox mr-2'>
                    <input
                        type="checkbox"
                        name="upperCase"
                        onChange={handleCheckChange}
                    /> Uppercase Letters
                </label>
                <label className='checkbox mr-2'>
                    <input
                        type="checkbox"
                        name="lowerCase"
                        onChange={handleCheckChange}
                    /> Lowercase Letters
                </label>
                <label className='checkbox mr-2'>
                    <input
                        type="checkbox"
                        name="numeric"
                        onChange={handleCheckChange}
                    /> Numbers
                </label>
                <label className='checkbox mr-2'>
                    <input
                        type="checkbox"
                        name="specialChar"
                        onChange={handleCheckChange}
                    /> Special Characters
                </label>
                <button id='submit-btn' className='button is-link mt-4 has-text-white' type="submit">Generate Password</button>
            </form>
            </div>
            <h4 className='mt-5' id='password'>{password}</h4>
            </div>
    </div>
    );
}