import React, { useState, useEffect } from 'react';

function PlayerHand() {
    const [message, setMessage] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/getPlayer').then(res=>{
            return res.json()}).then(data=>{
            const newData = Object.values(data)
            setMessage(newData)
            })
        }, [])

    return (
        <main>
            {message[0]}<br/>
            {message[1]}
        </main>
    );
}
export default PlayerHand;
