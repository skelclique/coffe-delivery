import styled from 'styled-components'

export const HomeContainer = styled.div`
  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    font-size: 2rem;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 3.375rem;
  }

  & > main {
    margin: 2rem 0;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`
