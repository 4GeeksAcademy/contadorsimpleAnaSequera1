import React from "react";
import ReactDOM from "react-dom/client"; 

import SecondsCounter from './components/SecondsCounter.jsx'; 

import '../styles/index.css'; 

const root = ReactDOM.createRoot(document.querySelector("#root")); 

let counter = 0; 

setInterval(() => {
    root.render(
        <React.StrictMode>
            <SecondsCounter seconds={counter} /> 
        </React.StrictMode>
    );
    counter++; 
}, 1000);