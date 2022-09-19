import styled from "styled-components";

export const Container = styled.header`
  padding: 2rem 5rem;
  color: ${props => props.theme.title};
  background: ${props => props.theme["header-dark"]};

  a{
    text-decoration: none;
    color: ${props => props.theme.title};
    transition: color 0.2s;

    &:hover{
      color: ${props => props.theme.text}; 
    }
  }

    @media (max-width: 768px) {
      font-size: 0.7rem;
      text-align: center;
    }
`