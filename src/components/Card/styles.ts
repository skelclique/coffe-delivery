import styled from 'styled-components'

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 16rem;
  align-items: center;
  padding: 0 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;

  margin-bottom: 2.5rem;

  gap: 1rem;

  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 1.25rem;

    & > div:last-child {
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  img {
    margin-top: -1.25rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      padding: 0.25rem 0.5rem;
      border-radius: 99px;
      text-transform: uppercase;

      font-size: 0.625rem;
      font-weight: bold;

      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;

  h1 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PriceContainer = styled.div`
  font-size: 0.825rem;
  align-self: flex-end;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
  }
`

export const AmountContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  line-height: 1.6;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  border-radius: 6px;

  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    svg {
      color: ${(props) => props.theme.purple};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  cursor: pointer;
  border: 0;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
