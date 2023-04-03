import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  background: ${(props) => props.theme.background};

  & > a {
    border-radius: 4px;
    outline-offset: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

interface CartProps {
  amount: number
}

export const ActionsContainer = styled.div<CartProps>`
  display: flex;
  gap: 0.75rem;

  a,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    border: 0;
  }

  div {
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['purple-light']};

    gap: 0.25rem;

    font-size: 0.875rem;
  }

  a {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    position: relative;
    cursor: pointer;

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(40%, -40%);
      content: ${(props) => (props.amount === 0 ? '' : `'${props.amount}'`)};
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 999px;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.75rem;
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
