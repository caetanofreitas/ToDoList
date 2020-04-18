import styled from 'styled-components';

export const InputGroup = styled.form`
    width: 100%;
    height: auto;
    padding: 0 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }

    @media screen and (max-width: 569px) {
        flex-direction: column;
        padding: 0;
    }

    input {
        height: 50px;
        margin-right: 20px;
        border: none;
        border-radius: 5px;
        width: 350px;
        font-size: 16px;
        padding: 0 24px;
        transition: all ease-in-out 0.35s;

        @media screen and (max-width: 569px) {
            width: 90%;
            margin: 0 auto;
        }
    }

    button {
        height: 50px;
        background: ${props => props.theme.colors.green};
        color: #EEE;
        border: none;
        border-radius: 5px;
        padding: 10px 24px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: all ease-in-out 0.35s;
            opacity: 0.7;

        :hover {
            opacity: 1;
            box-shadow: 0 0 10px 2px ${props => props.theme.colors.green};
        }

        @media screen and (max-width: 569px) {
            width: 90%;
            margin: 0 auto;
            margin-top: 10px;
        }
    }

    .error {
        border: 1px solid #f53a25;
        box-shadow: 0 0 5px 2px #f53a25;

        ::placeholder {
            color: #f53a25;
        }
    }
`;