import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainter } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainter>
        <Header />
        <Outlet />
      </LayoutContainter>
    </div>
  )
}
