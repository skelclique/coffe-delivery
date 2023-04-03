import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  max-height: 5rem;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 1.25rem;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  & > span {
    font-weight: bold;
    display: flex;
    gap: 0.25rem;
  }

  img {
    width: 4rem;
  }
`

export const DeleteItemContainer = styled.button`
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem;

  cursor: pointer;

  color: ${(props) => props.theme['base-subtitle']};
  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;

  transition: background-color 0.1s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 2rem;
`
