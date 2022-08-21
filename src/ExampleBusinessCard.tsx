import {Container} from "react-bootstrap";
import React from "react";
import {BusinessCard} from "./BusinessCard";

export let ExampleBusinessCard: JSX.Element;
ExampleBusinessCard = (
    <BusinessCard
        showPrintButton={true}
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
            <img
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
                    on my GitHub:

                    <br/><br/>

                    <p style={{textAlign: "center"}}>https://github.com/HenryFBP/</p>
                </p>
                <p>
                    In short, I love to program, teach, and document my work; and I would say that I’m very good
                    at it.
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
);
