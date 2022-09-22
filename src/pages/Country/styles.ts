import styled, { keyframes } from "styled-components";
import { fadeInLeft } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;


export const Container = styled.main`
  width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .button-wrapper{
    margin: 2rem 0 0;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 7rem;
      padding: .5rem 1rem;

      border: 0;
      cursor: pointer;
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.primary};
      box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.6);
      transition: filter 0.2;

      &:hover {
        filter: brightness(1.1)
      }
    }
    @media (max-width: 1000px) {
      margin: 2rem auto;
    }
  }

  @media (max-width: 1000px) {
    margin: 0;
    width: 100%;
  }
`

export const Content = styled.div`
  width: 75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  animation: 1s ${fadeInLeftAnimation};
  
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 3rem auto;


    img {
      width: 30rem;
 
      @media (max-width: 1000px) {
       width: 15rem;
      }
    }

    .text {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: .5rem;

      h1 {
        color: ${props => props.theme.colors.text}
      }

      p {
        color: ${props => props.theme.colors.text}
      }

      .border-countries-box {
        display: flex;
        margin: 2rem 0;
        
        p {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          max-width: 80%;

          span {
            width: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-left: 0.5rem;
            padding: 0.5rem;
            border-radius: 8px;
            background-color: ${props => props.theme.colors.primary}
          }
        } 
        
      @media (max-width: 1000px) {
          display: none;
        }
      }
      
    }

    @media (max-width: 1000px) {
        max-width: 90%;
        padding: 0 2%;
        justify-content: center;
      }
  }
  
      @media (max-width: 1000px) {
        flex-direction: column;
        max-width: 100%;
        margin: 0;
      }
`

