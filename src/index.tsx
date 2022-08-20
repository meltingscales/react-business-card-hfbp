import React from 'react';
import ReactDOM from 'react-dom/client';
import BusinessCard from './BusinessCard';
import reportWebVitals from './reportWebVitals';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Container>
            <h1>this is an example of how a business card will look :)</h1>
            <BusinessCard
                name={'Henry Post'}
                cell={'xxx-xxx-xxxx'}
                skills={[
                    'Python',
                    'Java',
                    'Kubernetes',
                    'Helm',
                    'Linux',
                    'SQL',
                    // 'Documentation',
                    // 'Backend APIs'
                ]}
                frontBlurb={
                    <img //this image is not square T_T TODO: you lazy BASTARD!!! GET A PROFESSIONAL HEADSHOT! >:3c
                        src={'https://pbs.twimg.com/profile_images/1560595569730617344/yuAzEGGl_400x400.jpg'}
                        style={{
                            width: '7.5em',
                            height: '7.5em',
                        }}
                        alt={"A picture of Henry smiling"}/>
                    // null
                }
                backBlurb={
                    <Container>
                        <p>
                            I have an intense drive to explain, document, and teach programming and technology concepts.
                            When creating code, I strive to create reusable, clean, and well-documented code.
                            I have a wide and deep history of programming projects, all under version control and most
                            on my
                            GitHub: <br/><br/>

                            <p style={{textAlign: "center"}}>https://github.com/HenryFBP/</p>
                        </p>
                        <p>
                            In short, I love to program, teach, and document my work; and I would say that I’m very good
                            at
                            it.
                        </p>
                    </Container>
                }
                headlines={[
                    'Cybersec',
                    'Automation Engineer',
                    // 'Fullstack Java',
                    'Helm & K8s',
                    'L2 Support & DevSecOps'
                ]}
                email={'resplendent [dot] falconeer [at] gmail [dot] com'}
                location={'Chicago | Martha\'s Vineyard'}
                website={'henrypost.net'}
            />
        </Container>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
