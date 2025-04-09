"use client"

import styled from "styled-components";
import {useState} from "react";
const StyledDiv = styled.div`
    height: 100vh;
    margin: auto;
    padding: 10vh;
    background: aliceblue;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size:calc(1px + 1.5vw);
    label{
        margin-bottom: 3vh;
    }
    input{
        width: 40%;
        margin: auto;
        padding: 1vh;
    }
    a{
        text-decoration: none;
        color: white;
        background-color:darkseagreen;
        border-radius: 2vh;
        padding: 1vh;
        margin-top: 3vh;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 10vh;
    margin: 5vh;
`


export default function Home(){
    const [text, setText] = useState<string>("");
  return(
      <StyledDiv>
          <Wrapper>
              <label htmlFor="input-bar"><strong>Please type to search for meals: </strong></label>
              <input
                  type="text"
                  placeholder="You can input either a letter or words.(e.g. a or apple)"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
              />
              <a href={text.length === 1? `/letter/${text}` : (text.length === 0? `/` : `/meal/${text}`)}>
                  Submit
              </a>
          </Wrapper>
      </StyledDiv>
  )
}
