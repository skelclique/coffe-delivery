import styled from 'styled-components'

export const SucessContainer = styled.div`
  margin-top: 2.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  & > p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DetailsContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 6.5rem;

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem;
    flex: 1;
    background: linear-gradient(#fafafa, #fafafa) padding-box,
      linear-gradient(to right, #dbac2c, #8047f8) border-box;
    border: 1px solid transparent;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;

    section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    section + section {
      margin-top: 2rem;
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface ItemProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  width: 2rem;
  height: 2rem;

  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};

  svg {
    color: ${(props) => props.theme.background};
  }
`
