import styled from 'styled-components'

export const IntroductionContainer = styled.header`
  display: flex;
  gap: 3.5rem;
  padding: 5.875rem 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    color: ${(props) => props.theme['base-text']};
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  transform: translateY(-5.875rem);
  z-index: -1;
`

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const STATUS_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  gray: 'base-title',
  purple: 'purple',
} as const

interface ItemProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Item = styled.div<ItemProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;

  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};

  svg {
    color: ${(props) => props.theme.background};
  }
`
