import React, { useState } from 'react';

const CartoonGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleGenerateClick = async () => {
        if (!inputText) return;

        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_API_KEY`
                },
                body: JSON.stringify({
                    prompt: inputText,
                    n: 1,
                    size: '1024x1024'
                })
            });

            const data = await response.json();
            setImageUrl(data.data[0].url);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };

    return (
        <div>
            <h2>Cartoon Generator</h2>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter a description for your cartoon"
            />
            <button onClick={handleGenerateClick}>Generate Cartoon</button>
            {imageUrl && <img src={imageUrl} alt="Generated Cartoon" />}
        </div>
    );
};

export default CartoonGenerator;