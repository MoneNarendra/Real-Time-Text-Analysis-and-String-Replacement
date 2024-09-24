
import React, { useState } from 'react';

import "./TextStats.css"

function TextStats() {
    const [text, setText] = useState('');

    // Function to calculate statistics
    const calculateStats = () => {
        const words = text.split(/\s+/).filter(word => word !== '');
        const uniqueWords = new Set(words).size;
        const characters = text.replace(/\s+|\p{P}/gu, '').length;

        return { uniqueWords, characters };
    };

    // Function to replace strings dynamically
    const replaceString = (oldString, newString) => {
        setText(text.replace(new RegExp(oldString, 'g'), newString));
    };

    const { uniqueWords, characters } = calculateStats();

    return (
        <div className='bg-cntainer'>
            <div className='inner-container'>
                <h1>Real-Time Text Analysis and String Replacement</h1>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your text here"
                    rows="10"
                />
                <div className='count-input-container'>
                    <p>Unique words: {uniqueWords}</p>
                    <p>Characters: {characters}</p>
                    <div className='input-container'>
                        <label>Replace:</label>
                        <input type="text" id="oldString" />
                        <label>With:</label>
                        <input type="text" id="newString" />
                        <button onClick={() => replaceString(document.getElementById('oldString').value, document.getElementById('newString').value)}>Replace</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextStats;