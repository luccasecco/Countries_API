import styled, { keyframes } from "styled-components";
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;


export const CardContainer = styled.div`
  width: 15rem;
  min-height: 28rem;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.colors.primary};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
  animation: 1s ${fadeInUpAnimation};
  transition: transform 0.2s;

    
    img {
      width: 100%;
      min-height: 10rem;
      max-height: 10rem;
    }

    h1 {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 1.25rem;
      color: ${props => props.theme.colors.text};
    }

    a {
      text-decoration: none;
    }

    .card-content{
      max-width: 80%;
      margin-top: 2rem;
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;

      p {
        font-size: .875rem;
        display: flex;
        align-items: center;
        gap: 0.45rem;
        color: ${props => props.theme.colors.text}
      }
    }

    &:hover {
      transform: scale(1.1)
    }
  
`