import React from 'react'
import { auth, provider } from "../redux/services/googleAuth/firebase";
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export default function HomepageComponent() {

    const [value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })

    return (
        <div>
            <button onClick={handleClick}>Sign up</button>
        </div>
    )
}
