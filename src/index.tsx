import React from 'react';
import ReactDOM from 'react-dom/client';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {ExampleBusinessCard} from "./ExampleBusinessCard";
import BusinessCard from "./BusinessCard";


export const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Container>
            <h1>this is an example of how a business card will look :)</h1>
            {ExampleBusinessCard}
        </Container>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default BusinessCard