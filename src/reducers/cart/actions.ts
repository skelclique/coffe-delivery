/* eslint-disable no-unused-vars */
import { Item } from './reducer'

export enum ActionTypes {
  INSERT_NEW_ITEM_ON_CART = 'INSERT_NEW_ITEM_ON_CART',
  DELETE_ITEM_ON_CART = 'DELETE_ITEM_ON_CART',
  INCREMENT_ITEM_AMOUNT = 'INCREMENT_ITEM_AMOUNT',
  DECREMENT_ITEM_AMOUNT = 'DECREMENT_ITEM_AMOUNT',
  CLEAR_CART = 'CLEAR_CART',
}

export function insertItemOnCart({ product, amount }: Item) {
  return {
    type: ActionTypes.INSERT_NEW_ITEM_ON_CART,
    payload: {
      product,
      amount,
    },
  }
}

export function deleteItemOnCart(productName: string) {
  return {
    type: ActionTypes.DELETE_ITEM_ON_CART,
    payload: {
      productName,
    },
  }
}

export function incrementAmount(productName: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_AMOUNT,
    payload: {
      productName,
    },
  }
}

export function decrementAmount(productName: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_AMOUNT,
    payload: {
      productName,
    },
  }
}

export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
