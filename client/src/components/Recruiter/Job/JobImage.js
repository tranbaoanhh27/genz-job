import React from "react";
import styled from "styled-components";

const RecruiterJobImage = (props) => {
    return (
        <FlexColumn className={`${props.className}`}>
            <Image src={props.imageUrl} />
            <Button type="button" className="btn btn-primary">
                Thay đổi ảnh
            </Button>
        </FlexColumn>
    );
};

export default RecruiterJobImage;

// Styled Components
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

const Button = styled.button`
    margin-top: 0.5rem;
    border-radius: 30px;
`;
