import styled from 'styled-components';

export const Switcher = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.colors.text};
    position: fixed;
    height: 10px;
    bottom: 15px;
    left: 40px;
    cursor: pointer;
    opacity: 0.5;
    transition: all ease-in-out 0.35s;

    :hover {
        opacity: 1;
    }

    @media screen and (max-width: 768px) {
        top: 10px;
    }
`;

export const LangBox = styled.div`
    background: ${props => props.theme.colors.text};
    position: absolute;
    bottom: 40px;
    left: 35px;
    height: 160px;
    padding: 10px;
    display: none;
    flex-direction: column;
    z-index: 2;
    border-radius: 5px;
    box-shadow: 0 0 2px 2px ${props => props.theme.colors.text};

    @media screen and (max-width: 768px) {
        top: 45px;
    }

    ::after {
        content: '';
        width: 15px;
        height: 15px;
        background: blue;
        position: absolute;
        bottom: -5px;
        left: 5px;
        transform: rotate(45deg);
        z-index: 1;
        background: ${props => props.theme.colors.text};
        box-shadow: 0 0 2px 2px ${props => props.theme.colors.text};
        
        @media screen and (max-width: 768px) {
            top: -5px;
            left: 6px;
        }
    }

    p {
        cursor: pointer;
        display: flex;
        width: 100%;
        padding: 10px;
        text-align: center;
        border: 1px solid ${props => props.theme.colors.bg};
        box-shadow: 0 0 1px 1px ${props => props.theme.colors.bg};
        z-index: 2;
        margin-top: 10px;
        color: ${props => props.theme.colors.bg};
        border-radius: 5px;
        transition: all ease-in-out 0.3s;
        font-weight: bold;
        font-size: 16px;
        opacity: 0.8;
        
        :first-child {
            margin-top: 0;
        }

        :hover {
            opacity: 1;
            box-shadow: 0 0 10px 2px ${props => props.theme.colors.bg};
            background: ${props => props.theme.colors.bg};
            color: ${props => props.theme.colors.text};
        }

        img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
        }
    }

    .selected {
        background: ${props => props.theme.colors.bg};
        color: ${props => props.theme.colors.text};
    }

    .active {
        display: flex;
    }

`;