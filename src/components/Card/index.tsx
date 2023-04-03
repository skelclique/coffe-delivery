import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { useContext, useState } from 'react'
import { Product, ShopContext } from '../../contexts/ShopContext'

import {
  AmountContainer,
  CardContainer,
  CartContainer,
  HeaderContainer,
  MainContainer,
  PriceContainer,
} from './styles'

import { toast } from 'react-toastify'

interface CardProps {
  product: Product
}

export function Card({ product }: CardProps) {
  const { insertItem } = useContext(ShopContext)
  const [amount, setAmount] = useState(1)

  function handleInsertItem() {
    toast.dismiss()
    insertItem({
      product,
      amount,
    })
    toast.success('☕ Produto adicionado!', {
      position: 'top-center',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  function handleAmountIncrement() {
    if (amount !== 99) {
      setAmount((state) => state + 1)
    }
  }

  function handleAmountDecrement() {
    if (amount !== 1) {
      setAmount((state) => state - 1)
    }
  }

  return (
    <CardContainer>
      <HeaderContainer>
        <img src={`/${product.image}`} alt={`${product.name}`} />
        <div>
          {product.types.map((type) => {
            return <span key={type}>{type}</span>
          })}
        </div>
      </HeaderContainer>
      <MainContainer>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </MainContainer>
      <footer>
        <PriceContainer>
          R${' '}
          <span>
            {String(product.price)
              .replace('.', ',')
              .padEnd(String(product.price).length + 1, '0')}
          </span>
        </PriceContainer>
        <div>
          <AmountContainer>
            <button onClick={handleAmountDecrement}>
              <Minus weight="bold" />
            </button>
            <span>{amount}</span>
            <button onClick={handleAmountIncrement}>
              <Plus weight="bold" />
            </button>
          </AmountContainer>
          <CartContainer onClick={handleInsertItem}>
            <ShoppingCart size={20} weight="fill" />
          </CartContainer>
        </div>
      </footer>
    </CardContainer>
  )
}
