import styled from 'styled-components'

const Tape = styled.div`
    background-color: hsla(0,0%,100%,0.8);
    box-shadow: inset 0 0 1em .5em hsla(0,0%,100%,.2);
    height: 3em;
    position: absolute;
    transform: rotate(-30deg);
    width: 9em;
    -webkit-filter: drop-shadow(0 1px 1px hsla(0,0%,0%,.3));

    &:after, :before {
        background-size: .4em .4em;
        bottom: 0;
        content: '';
        position: absolute;
        top: 0;
        width: .2em;
    }
    
    &:after {
        background-image: linear-gradient(45deg, transparent 50%, hsla(0,0%,100%,.5) 50%),
                      linear-gradient(-45deg, transparent 50%, hsla(0,0%,100%,.5) 50%);
        background-position: 0 100%;
        left: -.2em;
    }

    &:before {
    background-image: linear-gradient(135deg, transparent 50%, hsla(0,0%,100%,.5) 50%),
                      linear-gradient(-135deg, transparent 50%, hsla(0,0%,100%,.5) 50%);
    background-position: 100% 100%;
    right: -.2em;
  }
`

export const TapeTop = styled(Tape)`
    right: 28em;
    z-index: 1;
    transform: rotate(-40deg);
    padding-top: 2rem;
`

export const TapeBottom = styled(Tape)`
    right: 15em;
    z-index: 1;
    padding-top: 3rem;
    margin-top: 12em;
    transform: rotate(-40deg);
`