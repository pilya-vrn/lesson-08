import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
// import { apiAuthLogin } from '../../../api/auth'
import { appActions } from '../../../store/app/actions'
import { AppState } from '../../../store/app/types'
import { RootState } from '../../../store/types'
import { Auth } from '../../../types/auth'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import './RegistrationForm.css'

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {}

interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps

const b = block('reg-form')

const schema: Yup.SchemaOf<Auth.Registration.Params> = Yup.object().shape(({
  login: Yup.string().required(),
  mail: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required()
}))

const RegistrationPresenter: React.FC<Props> = ({ loading, errorText, appLogin }) => {
  const { errors, values, submitForm, handleChange } = useFormik<Auth.Registration.Params>({
    initialValues: {
      login: '',
      mail: '',
      password: '',
      passwordConfirm: ''

    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appLogin(fields)
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b()}>
      <h2 className={b('title')}>Регистрация</h2>
      <Input
        className={b('field')}
        label={'Имя'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
       <Input
        className={b('field')}
        label={'mail'}
        name={'mail'}
        value={values.mail}
        onChange={handleChange}
        error={errors?.mail}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Пароль'}
        name={'password'}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disabled={loading}
      />
       <Input
        className={b('field')}
        label={'Подтвердите пароль'}
        name={'confirmPassword'}
        value={values.passwordConfirm}
        onChange={handleChange}
        error={errors?.passwordConfirm}
        disabled={loading}
      />
      {!!errorText && <p className={'error'}>{errorText}</p>}
      <div>
        <Button text={'Зарегистрироваться'} disabled={loading} />
        <Button text={'Войти'} onClick={handlerSubmit} disabled={loading} />
      </div>
    </form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions }

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProp)(RegistrationPresenter)
