import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  color: ${props => props.theme.title};
  background: ${props => props.theme.colors.primary};

  a{
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: color 0.2s;

    &:hover{
      color: ${props => props.theme.colors.secundary}; 
    }
  }

    @media (max-width: 1000px) {
      font-size: 0.7rem;
      text-align: center;
    }
`