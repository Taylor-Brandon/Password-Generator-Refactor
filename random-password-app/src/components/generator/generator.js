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

    if (formState.charLength > '10') {
        alert('Character length is only 10 characters!');
    }

    let newPassword = '';
        for (let i = 0; i < formState.charLength; i++) {
            const randomIndex = Math.floor(Math.random() * newCharSet.length);
            newPassword += newCharSet[randomIndex];
        }

        setPassword(newPassword);
};
    return(
    <div>
       <form onSubmit={handleFormSubmit}>
                <input
                    type="number"
                    name="charLength"
                    onChange={handleInputChange}
                    placeholder="Password length"
                />
                <label>
                    <input
                        type="checkbox"
                        name="upperCase"
                        onChange={handleCheckChange}
                    /> Uppercase Letters
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="lowerCase"
                        onChange={handleCheckChange}
                    /> Lowercase Letters
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="numeric"
                        onChange={handleCheckChange}
                    /> Numbers
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="specialChar"
                        onChange={handleCheckChange}
                    /> Special Characters
                </label>
                <button type="submit">Generate Password</button>
            </form>
            <h4>{password}</h4>
    </div>
    );
}