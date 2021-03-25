import block from 'bem-cn'
import React from 'react'
import './References.css'

interface Props {
}

const b = block('ref-page')

export const References: React.FC<Props> = () => {
  return (
    <div className={b()}>
      References
    </div>

  )
}
