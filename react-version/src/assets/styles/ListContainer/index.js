import styled from 'styled-components';

export const List = styled.ul`
    width: 95%;
    height: auto;
    max-height: 460px;
    margin: 0 auto;
    margin-top: 30px;
    list-style: none;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 9999;

    ::-webkit-scrollbar {
        width: 5px;
        border-radius: 2px;
        background: ${props => props.theme.colors.text};
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.green};
    }
`;

export const Item = styled.li`
    font-size: 18px;
    border: none;
    border-top: 1px solid ${props => props.theme.colors.border};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding: 20px;
    width: 100%;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div {
        display: flex;
        align-items: center;

        :first-child {
            width: 70%;
        }

        :last-child {
            width: 30%;
            max-width: 300px;
            justify-content: flex-end;
        }

        svg {
            margin-right: 20px;
            cursor: pointer;
        }
    }

    .completed {
        color: ${props => props.theme.colors.green};
        text-decoration: line-through;

        svg {
            color: ${props => props.theme.colors.green};
        }
    }
    
    .itemText {
        width: 90%;
        word-wrap: break-word;
        
        @media (max-width: 635px) {
            width: 80%;
        }

        @media (max-width: 320px) {
            width: 100px;
        }
    }

`;

export const DateItem = styled.p`
    color: ${props => props.theme.colors.border};
    font-weight: bold;
    margin: 0;
    margin-right: 20px;
    font-size: 10px;

    .text {
        margin-right: 0px;
    }

    span {
        margin-right: 10px;
        font-size: 10px;
    }

    @media (max-width: 680px) {
        display: none;
    }
`;