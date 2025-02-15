import React, {ReactNode} from "react";

export interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
    return (
        <section>{children}</section>
    )
}

export default Card;