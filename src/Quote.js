import React, { Component } from "react";
import "./Quote.css";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Typing from 'react-typing-animation';
import quotes from './QuoteList.js';


const Fade = styled.div`animation: 3s ${keyframes`${fadeIn}`} infinite`;

class Quote extends React.Component {

    render() {
        const {handleGenerate, number } = this.props
        return (
            <div class="page">

                <div class="title" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <Typing>Random Quote Generator</Typing>
                </div>

                <div class="randQuoteBox">
                    <div class="randQuote">
                        <Fade>"{quotes[number].quote}"</Fade>
                    </div>
                    <div class="randAuthor">
                        <Fade>- {quotes[number].author}</Fade>
                    </div>
                    <br></br>
                </div>



                <br></br>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <button
                        onClick={() => handleGenerate()}
                        className="quoteButton">Generate Quote</button>

                </div>

            </div>
        );
    }
}

export default Quote
