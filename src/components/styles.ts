import styled from "styled-components";


export const AppContainer = styled.section`
    height: 100%;
    width: 100%;
    background: #3179ba;
    display: flex;
    align-items: flex-start;
    padding: 2rem
`;

export const ColumnContainer = styled.div`
    width: 300px;
    min-height: 40px;
    background: #ebecf0;
    border-radius: 0.4rem;
    margin-left: 1rem;
    padding: 0.5rem;
    flex-grow: 0;
`;

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`;

export const CardContainer = styled.div`
    background: #fff;
    max-width: 300px;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0px 1px 1px 0px #091e4240;
`;
