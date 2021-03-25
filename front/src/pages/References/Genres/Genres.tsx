import block from 'bem-cn'
import React from 'react'
import './Genres.css'

interface Props {
}

const b = block('ref-genres-page')

export const Genres: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Genres
    </div>
  )
}
