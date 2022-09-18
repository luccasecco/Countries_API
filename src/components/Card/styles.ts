import styled from "styled-components";


export const CardContainer = styled.div`
  width: 15rem;
  min-height: 28rem;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme["header-dark"]};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
    
    img {
      width: 100%;
      min-height: 10rem;
      max-height: 10rem;
    }

    h1 {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 1.25rem;
      color: ${props => props.theme.title}
    }

    a {
      text-decoration: none;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.3)
      }
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
        color: ${props => props.theme.text}
      }
    }
  
`