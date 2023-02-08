import React from "react";
import styled from "styled-components";

const Loader = ({ size }) => {
    return <StyledDiv size={size} />;
};

const StyledDiv = styled.div`
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #545abe; /* Blue */
    border-radius: 50%;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loader;
