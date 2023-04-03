import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ShopContext } from '../../contexts/ShopContext'
import { Item } from '../../reducers/cart/reducer'
import { AmountContainer } from '../Card/styles'

import { ActionsContainer, CardContainer, DeleteItemContainer } from './styles'

export function HorizontalCard({ product, amount }: Item) {
  const { deleteItem, incrementItemAmount, decrementItemAmount } =
    useContext(ShopContext)

  const price = (product.price * amount).toFixed(1)

  function handleDeleteItem() {
    deleteItem(product.name)
  }

  function handleAmountIncrement() {
    if (amount !== 99) {
      incrementItemAmount(product.name)
    }
  }

  function handleAmountDecrement() {
    if (amount !== 1) {
      decrementItemAmount(product.name)
    }
  }

  return (
    <CardContainer>
      <div>
        <img
          src={`/src/assets/samples/${product.image}`}
          alt={`${product.name}`}
        />
        <div>
          <span>{product.name}</span>
          <ActionsContainer>
            <AmountContainer>
              <button type="button" onClick={handleAmountDecrement}>
                <Minus weight="bold" />
              </button>
              <span>{amount}</span>
              <button type="button" onClick={handleAmountIncrement}>
                <Plus weight="bold" />
              </button>
            </AmountContainer>
            <DeleteItemContainer onClick={handleDeleteItem}>
              <Trash size={20} />
              Remover
            </DeleteItemContainer>
          </ActionsContainer>
        </div>
      </div>
      <span>
        <span>R$ </span>
        {String(price)
          .replace('.', ',')
          .padEnd(String(price).length + 1, '0')}
      </span>
    </CardContainer>
  )
}
