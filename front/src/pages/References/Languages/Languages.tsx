import block from 'bem-cn'
import React from 'react'
import './Languages.css'

interface Props {
}

const b = block('ref-langeuges-page')

export const Languages: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Languages
    </div>
  )
}
