import { useContext } from 'react'

import { Card } from '../../components/Card'

import { Introduction } from '../../components/Introduction'

import { ShopContext } from '../../contexts/ShopContext'

import { HomeContainer } from './styles'

export function Home() {
  const { products } = useContext(ShopContext)

  return (
    <HomeContainer>
      <Introduction />
      <h1>Nossos cafés</h1>
      <main>
        {products.map((product) => {
          return <Card product={product} key={product.name} />
        })}
      </main>
    </HomeContainer>
  )
}
