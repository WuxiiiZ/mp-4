"use client"
import styled from "styled-components";
import React from "react";
import type{Recipe} from "@/interface/Recipes";

const StyledDiv = styled.div`
    width: 80vw;
    margin: auto;
    padding: 5vh;
    background: aliceblue;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Recipe = styled.div`
    width: 60%;
    height: auto;
    padding: 2vh;
    margin: 0.5vh;
    font-size:calc(1px + 1.5vw);
    text-align: center;
    border: 0.5vh;
    color: whitesmoke;
    background: darkseagreen;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledPicture = styled.img`
    max-width: 15vh;
    max-height: 15vh;
`;

const Introdiv = styled.div`
    text-align: left;
`
const Tag = styled.span`
    color:blanchedalmond;   
`

export default function RecipeDiv(props:{data:{meals: Recipe[]};
}) {
    return (
        <StyledDiv>
            <h1>Here is the search result : </h1>
            {props.data.meals.map((meal) => (
                <Recipe key={meal.idMeal}>
                    <Introdiv>
                        <Tag>Name: </Tag>{meal.strMeal}
                        <br/>
                        <Tag>Category</Tag>: {meal.strCategory}
                        <br/>
                        <Tag>From:</Tag> {meal.strArea}
                        <br/>
                        {meal.strTags? <div><Tag>Tags: </Tag>{meal.strTags}</div> : null}
                    </Introdiv>

                    <StyledPicture src={meal.strMealThumb} alt={meal.strMeal} />
                </Recipe>
            ))}
        </StyledDiv>
    )
}