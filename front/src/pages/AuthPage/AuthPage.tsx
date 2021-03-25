import block from 'bem-cn'
import React from 'react'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
        <form>
          <div className={b('header')}>Страница входа</div>
          <input type="email" placeholder="Введите email" required name="mail"
          className={b('mail-input')}/>
          <br />
          <input type="password" placeholder="Введите пароль" required name="password"
          className={b('password-input')}/>
          <br />
          <input type="submit" value="Войти" className={b('submit')}/>
          <br />
          <a href="#" className={b('link')}>Восстановить пароль</a>
          <br />
          <a href="#" className={b('link')}>Незарегистрированны? Создать аккаунт</a>
        </form>
    </div>
  )
}
