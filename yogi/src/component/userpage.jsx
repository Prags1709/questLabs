import React from "react";
import { SubmitForm } from "./submitForm";

export const UserPage = ()=>{
    return (
        <div>
            <h1>EMPATH AI</h1>
            <h3>Unlock the hidden chambers of your consciousness, and I shall curate a meditation that mirrors the beauty of your soul.</h3>
            <h3>With unwavering guidance, I'll be your companion on this soulful odyssey.</h3>
            <img className="yogini" src="https://e0.pxfuel.com/wallpapers/1011/35/desktop-wallpaper-meditation-girls-yoga-illustration-yoga-cartoon-yoga-art-anime-meditation.jpg" alt="yogi " style={{
                animation: 'moveImage 4s linear infinite', 
            }}/>
            <h3>Caring for You, Understanding Your Needs, and Healing Together</h3>
            <SubmitForm />
        </div>
    )
};