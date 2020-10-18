import React from "react";
import { CardContainer } from "./styledComponents";

interface CardProps {
    text: string
}

const Card = ({text}: CardProps) => {
    return (
        <CardContainer>
            {text}
        </CardContainer>
    )  
}

export default Card;