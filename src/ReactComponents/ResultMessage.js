import React, { useState, useEffect } from 'react';

function ResultMessage() {
    const [message, setMessage] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/getResult').then(res=>{
            return res.json()}).then(data=>{
            const newData = Object.values(data)
            setMessage(newData)
            })
        }, [])

    return (
        <main>
            <h3>{message}</h3>
        </main>
    );
}
export default ResultMessage;
