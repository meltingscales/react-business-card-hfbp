import {Button, Container, Row} from "react-bootstrap";
import {Component, SyntheticEvent, useRef} from "react";
import {LeftRightText} from "./tidbits/LeftRightText";
import "./BusinessCard.scss"
import {useReactToPrint} from "react-to-print";

export type TBusinessCard = {
    showPrintButton?: boolean;
    frontBlurb?: any;
    backBlurb?: any;
    name: string,
    headlines: string[],
    cell: string,
    location: string,
    website?: string,
    email?: string,
    skills?: string[],
};

export const BusinessCard = (props: TBusinessCard) => {

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: function () {
            return componentRef.current;
        },
    });


    //inspiration:
    //      https://png.pngtree.com/png-clipart/20200721/original/pngtree-programmer-business-card-black-png-image_4868136.jpg

    // //for calc the size later
    // static WIDTH = 3.5
    // static HEIGHT = 2.0
    // static WIDTH_TO_HEIGHT = (BusinessCard.WIDTH / BusinessCard.HEIGHT)
    // static HEIGHT_TO_WIDTH = (BusinessCard.HEIGHT / BusinessCard.WIDTH)

    function doThePrinty(e: SyntheticEvent) {
        console.log("AOOGA printing")
        console.log(e)
        console.log(componentRef.current)

        //WOW! This works. This is terrible.

        // @ts-ignore
        componentRef.current.hidden = false
        // @ts-ignore
        componentRef.current['aria-hidden'] = false

        console.log(componentRef.current)
        handlePrint()

        // @ts-ignore
        componentRef.current.hidden = true
        // @ts-ignore
        componentRef.current['aria-hidden'] = true

    }

    function renderPrintButton() {
        return <div style={{textAlign: 'center'}}>
            <Button
                onClick={doThePrinty}
            >
                Print {props.name}'s Business Cards
            </Button>
        </div>
    }


    function renderBack() {
        return <Container className={'business-card business-card-back'}>

            {props.backBlurb}

            {props.skills ?
                <span>
                <pre>
                    <code>
                        skills = '{props.skills.join(',')}'.split(',')
                    </code>
                </pre>
            </span>
                :
                null
            }
        </Container>
    }

    function renderFront() {

        var h1Text = '~/' + (props.name.replace(' ', '')) + "";

        return <Container className={'business-card business-card-front'}>
            <h1>{h1Text}</h1>
            <pre><code>
                &gt; wget dev.srv/business-card.tex; xdg-open ./business-card.tex &#x23CE;
            </code></pre>
            <p style={{textAlign: 'center'}}>{(props.headlines.join(' - '))}</p>
            <LeftRightText
                left={props.frontBlurb}
                right={
                    <ul style={{listStyle: "none"}}>
                        <li>{props.cell}</li>
                        <li>{props.location}</li>
                        <li>{props.website}</li>
                        <li>{props.email}</li>
                    </ul>
                }/>
        </Container>
    }

    function renderPrintableSheetFront() {
        return <div className={'print-inside print-front'}>
            <Row>
                {renderFront()}
                {renderFront()}
            </Row>
            <hr/>
            <Row>
                {renderFront()}
                {renderFront()}
            </Row>
            <hr/>
            <Row>
                {renderFront()}
                {renderFront()}
            </Row>
            <hr/>
            <Row>
                {renderFront()}
                {renderFront()}
            </Row>
        </div>
    }

    function renderPrintableSheetBack() {
        return <div className={'print-inside print-back'}>
            <Row>
                {renderBack()}
                {renderBack()}
            </Row>
            <hr/>
            <Row>
                {renderBack()}
                {renderBack()}
            </Row>
            <hr/>
            <Row>
                {renderBack()}
                {renderBack()}
            </Row>
            <hr/>
            <Row>
                {renderBack()}
                {renderBack()}
            </Row>
        </div>

    }

    function renderPrintableSheet() {
        return <>
            <div
                className={'print'}
                hidden={true}
                aria-hidden={true}
                ref={componentRef} //this ref is what makes THIS SPECIFIC ELEMENT get printed when the button gets clicked
            >
                {renderPrintableSheetFront()}
                <div className={'pagebreak'}/>
                {renderPrintableSheetBack()}
            </div>
        </>

    }

    function render() {
        return <>
            <Container
                className={'business-card-both'}
            >
                {props.showPrintButton ? renderPrintButton() : null}
                {renderFront()}
                <hr/>
                {renderBack()}

                {/*
                this is hidden normally.
                TODO: Is there a way to not have to render this???
                */}
                {props.showPrintButton ? renderPrintableSheet() : null}
            </Container>
        </>;
    }

    return render()

}
