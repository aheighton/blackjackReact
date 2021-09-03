import React, { useState, useEffect } from 'react';

function Title() {
    const [message, setMessage] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/title').then(res=>{
            return res.json()}).then(data=>{
            const newData = Object.values(data)
            setMessage(newData)
            })
        }, [])

    return (
        <main>
            <h1>{message}</h1>
        </main>
    );
}

export default Title;