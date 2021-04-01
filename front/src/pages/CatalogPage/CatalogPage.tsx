import block from 'bem-cn'
import React from 'react'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton'
import './CatalogPage.css'

const b = block('toggle-button')

interface Props {}
export const CatalogPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <ToggleButton />
    </div>
  )
}
