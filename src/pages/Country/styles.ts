import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .button-wrapper{
    margin: 2rem 5rem 0;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 7rem;
      padding: .5rem 1rem;

      border: 0;
      cursor: pointer;
      color: ${props => props.theme.title};
      background: ${props => props.theme["header-dark"]};
      box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.6);
      transition: filter 0.2;

      &:hover {
        filter: brightness(1.2)
      }
    }
  }
`

export const Content = styled.div`
  width: 75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 2rem auto;

  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 5rem auto;

    img {
      width: 30rem;
    }

    .text {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: .5rem;

      h1 {
        color: ${props => props.theme.title}
      }

      p {
        color: ${props => props.theme.text}
      }

      .border-countries-box {
        display: flex;
        margin: 2rem 0;
        
        p {
          display: flex;
          align-items: center;

          span {
            width: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-left: 0.5rem;
            padding: 0.5rem;
            border-radius: 8px;
            background-color: ${props => props.theme["header-dark"]}
          }
        }
        
      }
    }
  }
`

