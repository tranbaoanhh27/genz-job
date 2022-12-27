import React, { useState } from "react";
import styled from "styled-components";
import { DarkTheme } from "../../../assets/themes";
import RecommendUserDetails from "./RecommendUserDetails";

/**
 * React Component representing an item in list of recommended users
 * @param {Object} user An object represent an user with at least 5 keys {id, UserName, age, level, skills}
 * @returns A JSXElement represents the component
 */
const RecommendItem = (props) => {
    const [viewDetails, setViewDetails] = useState(false);
    if (!props.user) return;

    let age = props.user.age;
    if (!age) age = Math.floor(Math.random() * (40 - 18) + 18);

    let level = props.user.level;
    if (!level) {
        if (age <= 22) level = "Intern";
        else if (age <= 24) level = "Fresher";
        else if (age <= 27) level = "Junior";
        else level = "Senior";
    }

    let skills = props.user.skills;
    if (!skills) {
        const SAMPLE_SKILLS = [
            "HTML, CSS, JavaScript, ReactJS",
            "Java, Android Development, UI/UX Design",
            "Swift, IOS Development, UI/UX Design",
            "Kotlin, Jetpack Compose, Google Cloud Platform, Android Development",
        ];
        skills = SAMPLE_SKILLS[Math.floor(Math.random() * 3)];
    }

    return (
        <>
            {viewDetails && (
                <RecommendUserDetails
                    user={{
                        ...props.user,
                        name: props.user.UserName,
                        level: level,
                        skills: skills,
                    }}
                    recommendedPosition={props.jobTitle}
                    onClose={() => setViewDetails(false)}
                />
            )}
            <Container
                className="list-group-item list-group-item-action"
                onClick={() => setViewDetails(true)}>
                <Row>
                    <Info label="Tên:" info={props.user.UserName || "Không rõ"} />
                    <Info label="Tuổi:" info={age || "Không rõ"} />
                    <Info label="Mức kinh nghiệm:" info={level || "Không rõ"} />
                </Row>
                <Row>
                    <Info label="Kỹ năng:" info={skills || "Không rõ"} />
                    <Button className="btn btn-danger" onClick={() => props.onSkip(props.user.id)}>
                        Bỏ qua
                    </Button>
                </Row>
            </Container>
        </>
    );
};

export default RecommendItem;

const Container = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 110%;
    background: ${DarkTheme.background};
    color: ${DarkTheme.text};

    &:hover {
        cursor: pointer;
        background: #18191a99;
        color: inherit;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    border-radius: 30px;
    height: fit-content;
`;

const Info = ({ label, info }) => {
    return (
        <div
            style={{
                display: "flex",
                width: "fit-content",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
            }}>
            <label>{label}</label>
            <p style={{ marginInlineStart: "1rem" }}>{info}</p>
        </div>
    );
};
