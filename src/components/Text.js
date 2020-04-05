import styled, { css } from 'styled-components';

export const Text = styled.p`
    display: inline-block;
    margin: 8px 0px;
    color: #212323;
    font-size: 14px !important;
    display: block;
    ${props =>
        props.widthSize &&
        css`
            width: ${props.widthSize};
    `};
    ${props =>
        props.isBold &&
        css`
            font-weight: bold;
    `};
    overflow-wrap: break-word;
`;