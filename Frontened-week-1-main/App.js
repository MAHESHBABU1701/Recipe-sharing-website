import React, { useState, useEffect } from 'react';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div>
            <h1>Frontend Connected to Backend</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
