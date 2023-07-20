import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export const Speech = ({ textFomate }) => {
    const [play, setPaly] = useState(true);

    const textContent = textFomate.split('\n')

    const speechHandler = () => {
        textContent.forEach((paragraph) => {
            const utterance = new SpeechSynthesisUtterance(paragraph);
            speechSynthesis.speak(utterance);
        });
    };

    speechHandler();

    if(play === false){
        speechSynthesis.cancel();
    }

    const handelPaly = ()=>{
        setPaly(!play)
    }

    return (
        <div className="response">
            {textContent.map((paragraph, index) => (
                <h4 key={index}>{paragraph}</h4>
            ))}
            <Button onClick={handelPaly} variant="contained" style={{
                 backgroundColor: play ? 'red'  : 'blue'
            }}>
                {play===true?"Stop Voice": "Start Voice"}
            </Button>
        </div>
    );
}