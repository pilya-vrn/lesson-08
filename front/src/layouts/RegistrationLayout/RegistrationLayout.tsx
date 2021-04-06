import block from 'bem-cn'
import React from 'react'
import { Header } from '../../components/Header/Header'
import './RegistrationLayout.css'

interface Props {
}

const b = block('auth-layout')

export const RegistrationLayout: React.FC<Props> = (props) => {
  return (
    <div className={b()}>
      <Header />
      <main className={b('main')}>
        {props.children}
      </main>
    </div>
  )
}
