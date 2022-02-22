import styled from "styled-components";
import { Link } from 'react-router-dom';

export default styled(Link)`
    display: inline-flex;
    padding: 0.25em 2em;
    margin: 1em;
    text-decoration: none;
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    font-size: 1.3rem;
    color: #E0FBFC;
    transition:0.2s;
    ${props =>props.active &&
    `
    background: blue;
    color:white;
    `}

    &:hover {
        color: #98C1D9;
    }
`;
