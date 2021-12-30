import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
        width: 90%;
        max-width: 400px;
        display: flex;
        padding-bottom: 10px;
    }
`;