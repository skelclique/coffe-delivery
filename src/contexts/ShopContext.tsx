import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  clearCart,
  decrementAmount,
  deleteItemOnCart,
  incrementAmount,
  insertItemOnCart,
} from '../reducers/cart/actions'

import { cartReducer, Item } from '../reducers/cart/reducer'

export interface Product {
  name: string
  description: string
  types: string[]
  image: string
  price: number
}

interface Address {
  cep: string
  street: string
  number: string
  neighborhood: string
  city: string
  complement?: string
  uf: string
}

interface ShopContextType {
  cart: Item[]
  address: Address
  products: Product[]
  paymentMethod: string
  clearCartItems: () => void
  insertItem: (item: Item) => void
  deleteItem: (itemName: string) => void
  incrementItemAmount: (itemName: string) => void
  decrementItemAmount: (itemName: string) => void
  changeAddress: (address: Address) => void
  changePaymentMethod: (paymentMethod: string) => void
}

export const ShopContext = createContext({} as ShopContextType)

interface ShopContextProviderProps {
  children: ReactNode
}

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  const products = [
    {
      name: 'Expresso Tradicional',
      types: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: 'tradicional.svg',
      price: 9.9,
    },
    {
      name: 'Expresso Americano',
      types: ['Tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      image: 'americano.svg',
      price: 9.9,
    },
    {
      name: 'Expresso Cremoso',
      types: ['Tradicional'],
      description: 'Café expresso tradicional com espuma cremosa',
      image: 'cremoso.svg',
      price: 9.9,
    },
    {
      name: 'Expresso Gelado',
      types: ['Tradicional', 'Gelado'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      image: 'gelado.svg',
      price: 10.9,
    },
    {
      name: 'Café com Leite',
      types: ['Tradicional', 'Com Leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      image: 'com-leite.svg',
      price: 11.9,
    },
    {
      name: 'Latte',
      types: ['Tradicional', 'Com Leite'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      image: 'latte.svg',
      price: 11.9,
    },
    {
      name: 'Capuccino',
      types: ['Tradicional', 'Com Leite'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      image: 'capuccino.svg',
      price: 11.9,
    },
    {
      name: 'Macchiato',
      types: ['Tradicional', 'Com Leite'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      image: 'macchiato.svg',
      price: 11.9,
    },
    {
      name: 'Mocaccino',
      types: ['Tradicional', 'Com Leite'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      image: 'mocaccino.svg',
      price: 11.9,
    },
    {
      name: 'Chocolate Quente',
      types: ['Tradicional', 'Com Leite'],
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      image: 'chocolate-quente.svg',
      price: 11.9,
    },
    {
      name: 'Cubano',
      types: ['Especial', 'Alcoólico', 'Gelado'],
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      image: 'cubano.svg',
      price: 18.9,
    },
    {
      name: 'Havaiano',
      types: ['Especial'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      image: 'havaiano.svg',
      price: 14.9,
    },
    {
      name: 'Árabe',
      types: ['Especial'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      image: 'arabe.svg',
      price: 14.9,
    },
    {
      name: 'Irlandês',
      types: ['Especial', 'Alcoólico'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      image: 'irlandes.svg',
      price: 17.9,
    },
  ]

  const [cart, dispatch] = useReducer(cartReducer, [], (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffe-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

  const [address, setAddress] = useState<Address>({} as Address)

  const [paymentMethod, setPaymentMethod] = useState('')

  function changePaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
  }

  function changeAddress(address: Address) {
    setAddress(address)
  }

  function insertItem(item: Item) {
    dispatch(insertItemOnCart(item))
  }

  function deleteItem(itemName: string) {
    dispatch(deleteItemOnCart(itemName))
  }

  function incrementItemAmount(itemName: string) {
    dispatch(incrementAmount(itemName))
  }

  function decrementItemAmount(itemName: string) {
    dispatch(decrementAmount(itemName))
  }

  function clearCartItems() {
    dispatch(clearCart())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffe-delivery:cart-state-1.0.0', stateJSON)
  }, [cart])

  return (
    <ShopContext.Provider
      value={{
        cart,
        address,
        products,
        paymentMethod,
        insertItem,
        deleteItem,
        incrementItemAmount,
        decrementItemAmount,
        changeAddress,
        changePaymentMethod,
        clearCartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
