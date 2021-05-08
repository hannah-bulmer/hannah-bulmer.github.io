
import styled from 'styled-components'

export const RightArrow = styled.div`
    top: 50%;
    right: 0;
    position: absolute;
    margin: 0 30px 30px 0;
    border: solid black;
    border-width: 0 15px 15px 0;
    display: inline-block;
    padding: 20px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`

export const LeftArrow = styled.div`
    top: 50%;
    left: 0;
    position: absolute;
    margin: 0 0 30px 30px;
    border: solid black;
    border-width: 0 15px 15px 0;
    display: inline-block;
    padding: 20px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`