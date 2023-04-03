import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { ShopContext } from '../../contexts/ShopContext'

import { ActionsContainer, HeaderContainer } from './styles'

import logoCoffeDelivery from '../../assets/logo.svg'

export function Header() {
  const { cart } = useContext(ShopContext)

  const amount = cart.reduce((accr, item) => (accr += item.amount), 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeDelivery} alt="" />
      </NavLink>
      <ActionsContainer amount={amount}>
        <div>
          <MapPin size={20} weight="fill" />
          São Lourenço, MG
        </div>
        <NavLink to="/checkout/cart">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
