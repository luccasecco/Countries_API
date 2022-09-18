import styled from "styled-components";

export const Container = styled.header`
  padding: 2rem 5rem;
  color: ${props => props.theme.title};
  background: ${props => props.theme["header-dark"]}
`