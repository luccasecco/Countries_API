import styled from "styled-components";

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
    background: ${props => props.theme["header-dark"]};

      svg {
        color: ${props => props.theme.title}
      }

      @media (max-width: 768px) {
        width: 20rem;
      }
   }

    input {
      width: 100%;
      color: ${props => props.theme.title};
      background: transparent;
      border: 0;
  
      &::placeholder {
        color: ${props => props.theme.text};
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
      color: ${props => props.theme.text};
      background: ${props => props.theme["header-dark"]};

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