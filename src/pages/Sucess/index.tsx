import { useContext } from 'react'

import { ShopContext } from '../../contexts/ShopContext'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { DetailsContainer, Item, SucessContainer } from './styles'

import illustrationImg from '../../assets/illustration.svg'

export function Sucess() {
  const { address, paymentMethod } = useContext(ShopContext)

  return (
    <SucessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <DetailsContainer>
        <main>
          <section>
            <Item statusColor="purple">
              <MapPin size={16} weight="fill" />
            </Item>
            <p>
              Entrega em <b>{address.street},</b> <b>{address.number}</b> <br />
              <span>{address.neighborhood}</span> - <span>{address.city}</span>,{' '}
              <span>{address.uf}</span>
            </p>
          </section>
          <section>
            <Item statusColor="yellow">
              <Timer size={16} weight="fill" />
            </Item>
            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </section>
          <section>
            <Item statusColor="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </Item>
            <p>
              Pagamento na entrega <br />
              <b>{paymentMethod}</b>
            </p>
          </section>
        </main>
        <img src={illustrationImg} alt="Entregador a caminho da entrega" />
      </DetailsContainer>
    </SucessContainer>
  )
}
