import React from 'react';
import styled, { css } from 'styled-components';


const Root = styled.div`
    display: inline-block;
`;

const Item = styled.a`
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;

    &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    &:hover:not(.active) {background-color: #ddd;}

    &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    ${props =>
        props.isActive &&
        css`
            background-color: #4CAF50;
            color: white;
            border: 1px solid #4CAF50;
    `};
`;


const Pagination = ({
    totalRecords,
    callBackAction,
    pageIndex = 1
}) => {
    const { length = 0 } = totalRecords;
    const pages = Math.round(length / 4);
    return (
        <Root className='pagination'>
            <Item href=' ' isActive={pageIndex === 'first'} onClick={(e) => {
                e && e.preventDefault();
                callBackAction && callBackAction(totalRecords.slice(0, 4), 'first')
            }}>&laquo;</Item>
            {
                new Array(pages).fill('').map((val, index) => {
                    return (
                        <Item isActive={pageIndex === (index + 1)} href=' ' onClick={(e) => {
                            e && e.preventDefault();
                            callBackAction && callBackAction(totalRecords.slice(index * 4, (index * 4) + 4), (index + 1))
                        }} key={index}>{index + 1}</Item>
                    )
                })

            }
            <Item href=' ' isActive={pageIndex === 'last'} onClick={(e) => {
                e && e.preventDefault();
                const balanceCount = length % 4 || 4;
                callBackAction && callBackAction(totalRecords.slice(length - balanceCount, length), 'last')
            }}>&raquo;</Item>
        </Root>
    )
}

export default Pagination;
