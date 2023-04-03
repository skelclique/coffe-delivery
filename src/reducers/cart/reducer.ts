import { ActionTypes } from './actions'
import produce from 'immer'
import { Product } from '../../contexts/ShopContext'

export interface Item {
  product: Product
  amount: number
}

export function cartReducer(state: Item[], action: any) {
  switch (action.type) {
    case ActionTypes.INSERT_NEW_ITEM_ON_CART:
      return produce(state, (draft) => {
        const alreadyInsertedItem = draft.find(
          (item) => item.product.name === action.payload.product.name,
        )

        if (alreadyInsertedItem) {
          alreadyInsertedItem.amount += action.payload.amount
        } else {
          draft.push(action.payload)
        }
      })

    case ActionTypes.DELETE_ITEM_ON_CART:
      return produce(state, (draft) => {
        draft.splice(
          draft.findIndex(
            (draft) => draft.product.name === action.payload.productName,
          ),
          1,
        )
      })

    case ActionTypes.INCREMENT_ITEM_AMOUNT:
      return produce(state, (draft) => {
        const selectedItem = draft.find(
          (draft) => draft.product.name === action.payload.productName,
        )

        if (selectedItem) {
          selectedItem.amount += 1
        }
      })

    case ActionTypes.DECREMENT_ITEM_AMOUNT:
      return produce(state, (draft) => {
        const selectedItem = draft.find(
          (draft) => draft.product.name === action.payload.productName,
        )

        if (selectedItem) {
          selectedItem.amount -= 1
        }
      })

    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.length = 0
      })
    default:
      return state
  }
}
