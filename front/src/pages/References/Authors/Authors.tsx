import block from 'bem-cn'
import React from 'react'
import './Authors.css'

interface Props {
}

const b = block('ref-authors-page')

export const Authors: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Authors
    </div>
  )
}
