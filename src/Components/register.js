import React, { useState } from "react";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">email</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name" id="name" name="name" />
                <label htmlFor="surname">surname</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="surname" placeholder="surname" id="surname" name="surname" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log in</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Login</button>
        </div>
    )
}