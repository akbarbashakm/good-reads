import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
    border: transparent;
    cursor: pointer;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;
    border-radius: 4px;
    outline: none;
    background-clip: padding-box;
    line-height: 1.41;
    color: #ffffff;
    background-color: #26cf96;
    border-color: #26cf96;
`;
const Button = ({
    buttonName = '',
    onClickAction = () => {}
}) => {
    return (
        <ButtonComponent type={'submit'} onClick={onClickAction}>{buttonName}</ButtonComponent>
    )
}

export default Button;