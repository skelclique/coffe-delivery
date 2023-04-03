import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  BackgroundImage,
  IntroductionContainer,
  Item,
  ItemsContainer,
} from './styles'

import backgroundImg from '../../assets/background.svg'
import landingImg from '../../assets/landing.svg'

export function Introduction() {
  return (
    <IntroductionContainer>
      <BackgroundImage src={backgroundImg} alt="" />
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ItemsContainer>
          <div>
            <Item statusColor="yellowDark">
              <ShoppingCart weight="fill" />
            </Item>
            Compra simples e segura
          </div>
          <div>
            <Item statusColor="gray">
              <Package weight="fill" />
            </Item>
            Embalagem mantém o café intacto
          </div>
          <div>
            <Item statusColor="yellow">
              <Timer weight="fill" />
            </Item>
            Entrega rápida e rastreada
          </div>
          <div>
            <Item statusColor="purple">
              <Coffee weight="fill" />
            </Item>
            O café chega fresquinho até você
          </div>
        </ItemsContainer>
      </div>
      <img src={landingImg} alt="" />
    </IntroductionContainer>
  )
}
