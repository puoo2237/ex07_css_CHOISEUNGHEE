import styled from "styled-components";

const StyleInput = styled.input`
    color: gray;
    font-size: 20px;
    margin-top: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid lightgray;
    letter-spacing: 3px;
    width: 100%;
    &:focus {
        border-bottom: 1px solid gray;
    }
`;
export default StyleInput;