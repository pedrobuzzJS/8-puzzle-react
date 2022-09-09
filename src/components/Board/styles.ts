import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 150px;
`;

export const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(3, 150px);
    padding: 25px;

    > div {
        border: 1px solid black;
        line-height: 100px;
        font-size: xx-large;
        font-family: Arial;
        text-align: center;
        cursor: pointer;
    }
`;