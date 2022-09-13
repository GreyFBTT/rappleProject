import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0 20px;
`;

const ServiceName = styled.div``;

const Menus = styled.div`
    margin-left: auto;

    a:not(:first-of-type) {
        padding-left: 30px;
    }
`;

const GNB = () => {
    return (
        <Container>
            <ServiceName>service name</ServiceName>
            <Menus>
                <Link to="/account">account</Link>
                <Link to="/">menu1</Link>
                <Link to="/">menu1</Link>
            </Menus>
        </Container>
    );
};

export default GNB;
