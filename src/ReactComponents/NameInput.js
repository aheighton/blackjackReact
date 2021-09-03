import React, { useState, useEffect } from 'react';

function NameInput() {
    const [message, setMessage] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/start').then(res=>{
            return res.json()}).then(data=>{
            const newData = Object.values(data)
            setMessage(newData)
            })
        }, [])

    return (
        <main>
            <div>
                <form action = "/start" method = "GET">
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name"/> <br/>
                    <input type="submit" value="Deal!"/>
                </form>
            </div>
        </main>
    );
}

export default NameInput;