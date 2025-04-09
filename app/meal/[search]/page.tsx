"use client"
import {useParams} from "next/navigation";
import styled from "styled-components";
import useSWR from "swr";
import RecipeDiv from "@/components/RecipeDiv";

const ErrorDiv = styled.div`
    font-size:calc(1px + 1.5vw);
    color:red;
`;

export default function Info() {
    const params = useParams();
    const {data, error} = useSWR(`/api/getData?s=${params.search}`,
        (url)=>
            fetch(url)
                .then(res => res.json()));
    if (!data) return (<div>Loading...</div>);
    if(error) return (
        <ErrorDiv>
            {error.message}
        </ErrorDiv>);
    if (!data.meals) return (<ErrorDiv>There is no related data. Please try again.</ErrorDiv>);
    return (
        <RecipeDiv params={params} data={data} />
    )
}

