import styled from "styled-components";

export const ListBox = styled.div`
    position: absolute;
    width: 400px;
    min-height: 220px;
    top: 150px;
    left: calc(50% - 180px);
    background-color: white;
    padding-bottom: 20px;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    .logo-area{
        color: chocolate;
        text-align: center;
        font-weight: bold;
        letter-spacing: 5px;
        font-size: 20px;
        border-bottom: 1px dotted olive;
        padding-bottom: 5px;
        width: 50%;
        margin: 0 auto;
        a {
            color: darkcyan;

            &:hover {
                color: cyan;
            }
        }
    }
`;

export const StyleBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const WrapBlock = styled.div`
    position: fixed;
    z-index: 1;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyleNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    ul {
        display: flex;
        li{
            margin-right: 30px;
        }
    }
    .menu li a {
        font-size: 20px;
        font-weight: bold;
    }
    a {
        color: black;
        &:hover{
            color: gray;
        }
    }
`;

export const StyleHeader = styled.header`
    // background-color: gold;
    margin: 0 auto;
    width: 1100px;
    height: 100px;
    align-items: center;
    display: flex;
`;
export const StyleTitle = styled.h1`
   width: 200px;
    .link {
        color: black;

        &:hover {
            color: grey;
        }
    }
`;

export const DivPage = styled.div`
    text-align: center;
    margin-top: 20px;
`;
export const SpanPage = styled.div`
    width: 30px;
    display: inline-block;
    cursor:pointer;
    color ${(props) => (props.$active ? "red" : "black")};
    &:hover{font-weight:bold;}`

export const Table = styled.table`
    width: 100%;
    font-size: 15px;
    border-collapse: collapse;
    text-align: center;
    th, td {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding: 8px;
        }
        
    td{
    font-size: 13px;
    }
`;