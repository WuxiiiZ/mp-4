import styled from "styled-components";
import React from "react";

const StyledDiv = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    background-color:skyblue;
    min-height: 10vh;
    color:lavender;
    font-size:calc(1px + 1.5vw);
    padding: 0.5%;
`;

export default function Header(){
    return(
        <StyledDiv>
            <b>CS 701 mp-4</b>
        </StyledDiv>
    )
};