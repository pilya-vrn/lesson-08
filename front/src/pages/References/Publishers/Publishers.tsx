import block from 'bem-cn'
import React from 'react'
import './Publishers.css'

interface Props {
}

const b = block('ref-publishers-page')

export const Publishers: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Publishers
    </div>
  )
}
