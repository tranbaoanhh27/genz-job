import React from "react";
import styled from "styled-components";

const RecruiterJobImage = (props) => {
    return (
        <FlexColumn className={`${props.className}`}>
            <Image src={props.imageUrl || DEFAULT_IMG_URL} />
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
    width: 125px;
    height: 125px;
    border-radius: 15px;
`;

const Button = styled.button`
    margin-top: 0.5rem;
    border-radius: 30px;
    max-width: 125px;
    text-align: center;
`;

const DEFAULT_IMG_URL = "https://www.fit.hcmus.edu.vn/vn/images/teachers/dbtien.jpg";
