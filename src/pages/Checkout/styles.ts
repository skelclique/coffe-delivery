import styled from 'styled-components'

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 40rem 28rem;
  column-gap: 2rem;

  padding-bottom: 15rem;
  margin: 2.5rem 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressFormContainer = styled(BaseCard)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    color: ${(props) => props.theme['base-subtitle']};

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  main {
    display: grid;
    row-gap: 1rem;
    column-gap: 0.75rem;
    grid-template:
      'cep . .'
      'street street street'
      'number complement complement'
      'neighborhood city uf';
  }
`

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  font-size: 0.75rem;
  grid-area: ${(props) => props.name};

  &:disabled {
    opacity: 0.7;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const OptionalContainer = styled.div`
  grid-area: complement;
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
  }

  span {
    position: absolute;
    right: 0.75rem;
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PaymentContainer = styled(BaseCard)`
  margin-top: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  & > div:first-child {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    color: ${(props) => props.theme['base-subtitle']};

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  & > div:last-child {
    display: flex;
    gap: 0.75rem;
  }
`

interface PaymentMethodProps {
  checked?: boolean
}

export const PaymentMethod = styled.button<PaymentMethodProps>`
  padding: 1rem;
  font-size: 0.625rem;
  text-transform: uppercase;
  flex: 1;

  border: 0;

  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  cursor: pointer;

  background: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};

  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.purple : props.theme['base-card']};

  transition: background-color 0.1s;

  &:disabled {
    color: ${(props) => props.theme['base-text']};
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background: ${(props) => (props.checked ? '' : props.theme['base-hover'])};
  }
`

export const OrderContainer = styled(BaseCard)`
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.yellow};
    display: contents;
  }

  section > div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.75rem;

    span:first-child {
      font-size: 0.875rem;
    }
  }

  section > div:last-of-type span {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  section > button {
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.6;
    text-transform: uppercase;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    margin-top: 1.5rem;
    width: 100%;
    padding: 0.75rem 0.5rem;

    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    transition: background-color 0.1s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const Separator = styled.div`
  margin: 1.5rem 0;
  height: 1px;
  background: ${(props) => props.theme['base-button']};
`
