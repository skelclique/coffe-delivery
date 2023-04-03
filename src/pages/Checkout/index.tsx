import { useContext, useEffect, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { HorizontalCard } from '../../components/HorizontalCard'
import { ShopContext } from '../../contexts/ShopContext'

import {
  CheckoutContainer,
  AddressFormContainer,
  PaymentContainer,
  OrderContainer,
  Input,
  PaymentMethod,
  Separator,
  OptionalContainer,
} from './styles'
import { toast } from 'react-toastify'

interface InputField {
  placeholder: string
  name:
    | 'number'
    | 'cep'
    | 'street'
    | 'complement'
    | 'neighborhood'
    | 'city'
    | 'uf'
}

const inputFields: InputField[] = [
  { placeholder: 'CEP', name: 'cep' },
  { placeholder: 'Rua', name: 'street' },
  { placeholder: 'Número', name: 'number' },
  { placeholder: 'Complemento', name: 'complement' },
  { placeholder: 'Bairro', name: 'neighborhood' },
  { placeholder: 'Cidade', name: 'city' },
  { placeholder: 'UF', name: 'uf' },
]

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)

  const navigate = useNavigate()

  const newAddressFormValidationSchema = zod.object({
    cep: zod.string().min(8, 'O CEP deve conter no mínimo 8 dígitos'),
    street: zod.string().min(1),
    number: zod.string().min(1),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1),
    city: zod.string().min(1),
    uf: zod
      .string()
      .min(2, 'UF deve conter 2 caracteres')
      .max(2, 'UF deve conter 2 caracteres'),
  })

  type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

  const newAdressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
  })

  const { handleSubmit, register, reset, watch, setValue, formState } =
    newAdressForm

  const { cart, changeAddress, changePaymentMethod, clearCartItems } =
    useContext(ShopContext)

  const isCartEmpty = cart.length === 0

  const sumOfItems = cart.reduce((acc, item) => {
    return acc + item.amount * item.product.price
  }, 0)
  const delivery = isCartEmpty ? 0 : 3.5
  const total = sumOfItems + delivery

  function handleFormSubmit(data: NewAddressFormData) {
    if (paymentMethod) {
      changeAddress(data)
      changePaymentMethod(paymentMethod)
      clearCartItems()
      navigate('/checkout/sucess')
    } else {
      toast.error('Selecione um metódo de pagamento', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  const cep = watch('cep')

  useEffect(() => {
    if (cep?.length >= 8) {
      fetchCep()

      async function fetchCep() {
        const response = await fetch(
          `https://viacep.com.br/ws/${cep.replace('-', '')}/json/`,
        )

        response.json().then((data) => {
          setValue('city', data.localidade)
          setValue('uf', data.uf)
          setValue('neighborhood', data.bairro)
          setValue('street', data.logradouro)
          setValue('complement', data.complemento)
          setValue('cep', data.cep)
        })
      }
    }
  }, [cep, setValue])

  useEffect(() => {
    setPaymentMethod(null)
    reset()
  }, [isCartEmpty, reset])

  useEffect(() => {
    Object.values(formState.errors).forEach((key) => {
      toast.error(key.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    })
  }, [formState.errors])

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <h1>Complete seu pedido</h1>
        <AddressFormContainer>
          <div>
            <MapPinLine size={24} />
            <div>
              Endereço de Entrega
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <main>
            {inputFields.map((input) => {
              if (input.name === 'complement') {
                return (
                  <OptionalContainer key={input.name}>
                    <Input
                      placeholder={input.placeholder}
                      disabled={isCartEmpty}
                      {...register(input.name)}
                    />
                    <span>Opcional</span>
                  </OptionalContainer>
                )
              } else {
                return (
                  <Input
                    key={input.name}
                    placeholder={input.placeholder}
                    {...register(input.name)}
                    disabled={isCartEmpty}
                    required
                  />
                )
              }
            })}
          </main>
        </AddressFormContainer>
        <PaymentContainer>
          <div>
            <CurrencyDollar size={24} />
            <div>
              Pagamento
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <div>
            <PaymentMethod
              checked={paymentMethod === 'Cartão de Crédito'}
              onClick={() => setPaymentMethod('Cartão de Crédito')}
              type="button"
              disabled={isCartEmpty}
            >
              <CreditCard size={24} />
              Cartão de Crédito
            </PaymentMethod>
            <PaymentMethod
              checked={paymentMethod === 'Cartão de Débito'}
              onClick={() => setPaymentMethod('Cartão de Débito')}
              type="button"
              disabled={isCartEmpty}
            >
              <Bank size={24} />
              Cartão de Débito
            </PaymentMethod>
            <PaymentMethod
              checked={paymentMethod === 'Dinheiro'}
              onClick={() => setPaymentMethod('Dinheiro')}
              type="button"
              disabled={isCartEmpty}
            >
              <Money size={24} />
              Dinheiro
            </PaymentMethod>
          </div>
        </PaymentContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <OrderContainer>
          {isCartEmpty ? (
            <>
              Nenhum produto selecionado no carrinho, clique{' '}
              <NavLink to="/">aqui</NavLink> para verificar os produtos em nosso
              catálogo.
              <Separator />
            </>
          ) : (
            cart.map(({ product, amount }) => {
              return (
                <div key={product.name}>
                  <HorizontalCard product={product} amount={amount} />
                  <Separator />
                </div>
              )
            })
          )}
          <section>
            <div>
              <span>Total de Itens</span>
              <span>
                R${' '}
                {String(sumOfItems.toFixed(sumOfItems === 0 ? 0 : 2)).replace(
                  '.',
                  ',',
                )}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                R${' '}
                {String(delivery.toFixed(sumOfItems === 0 ? 0 : 2)).replace(
                  '.',
                  ',',
                )}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                R${' '}
                {String(total.toFixed(sumOfItems === 0 ? 0 : 2)).replace(
                  '.',
                  ',',
                )}
              </span>
            </div>

            <button type="submit" disabled={isCartEmpty}>
              Confirmar Pedido
            </button>
          </section>
        </OrderContainer>
      </div>
    </CheckoutContainer>
  )
}
