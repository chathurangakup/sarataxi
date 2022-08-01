import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colors} from '../utils/styles'

export const Button= styled.h6`
    background: ${({primary})=>(primary? null:'cd85fd')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 130px;
    max-width: 200px;
    text-decoration: none;
    transition: 0.3s;
    border-radius: 1ch;
    display: flex;
    justify-content: center;
    align-items:center;
    border: ${({primary})=>(primary? '1px solid #fff' :'1px solid #000')} ;
    padding: ${({big})=>(big? '16px 40px': '14px 24px')};
    color: ${({primary})=>(primary? '#fff': '#000')}; 
     &:hover{
        transform: translateY(-2px);
        background: '#000d1a'; 
    }

 `