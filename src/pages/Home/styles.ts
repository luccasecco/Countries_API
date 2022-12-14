import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  max-width: 75rem;
  margin: 4rem auto;


  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Content = styled.div`
  max-width: 75rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
 
  .search-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 25rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${props => props.theme.colors.secundary};

      svg {
        color: ${props => props.theme.colors.primary}
      }

      @media (max-width: 768px) {
        width: 20rem;
      }
   }

    input {
      width: 100%;
      color: ${props => props.theme.colors.primary};
      background: transparent;
      border: 0;
  
      &::placeholder {
        color: ${props => props.theme.colors.primary};
      }
  
      &:focus {
        outline: 0;
      }
    }

    select {
      border: 0;
      width: 15rem;
      border-radius: 8px;
      padding: 1rem;
      color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.secundary};
      cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: 0 2px 2px 2px ${props => props.theme.colors.primary};
      }

      @media (max-width: 1000px) {
        display: none;
       }
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      padding: 0 2%;
      justify-content: center;
      width: 20%;
      margin: 1rem auto;
    }
  }


`