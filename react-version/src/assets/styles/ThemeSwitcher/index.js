import styled from 'styled-components';

export const Switcher = styled.span`
    background: none;
    border: none;
    color: ${props => props.theme.colors.text};
    position: fixed;
    height: 10px;
    bottom: 15px;
    left: 10px;
    opacity: 0.5;
    cursor: pointer;

    :hover {
        opacity: 1;
    }

    @media screen and (max-width: 768px) {
        top: 10px;
    }
`;