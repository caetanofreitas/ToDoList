import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    min-height: 120px;
    height: auto;
    padding: 40px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        padding-top: 40px;
    }
`;

export const DateBox = styled.ul`
    list-style: none;
    color: ${props => props.theme.colors.green};
    font-size: 15px;
    
    li:first-child {
        font-weight: bold;
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        text-align: center;
    }
`;

export const NavBar = styled.nav`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
    margin-right: 50px;
    text-align: center;

    li {
        cursor: pointer;
        margin-right: 50px;
        opacity: 0.5;
        transition: all ease-in-out 0.3s;
        
        :hover {
            opacity: 0.2;
        }

    }
    
    .selected { 
            opacity: 1
    }

    li:last-child{
        margin-right: 0px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
        padding: 0 10px;
        font-size: 20px;
    }

    @media screen and (max-width: 414px) {
        width: 100%;
        margin: 0;
        padding: 0 10px;
        font-size: 12px;
    }
`;